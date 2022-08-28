var datas;
var tempHuman;
var tempElf;
var tempUndead;
var tempOrc;

fetch('https://ef-utils.deta.dev')
    .then((response) => response.json())
    .then((data) => {
        datas = data
        human = datas['units']['human']
        elf = datas['units']['elf']
        undead = datas['units']['undead']
        orc = datas['units']['orc']
        if (userQueryUnit !== null) { // prioritize unit
            loadUnit(userQueryUnit)
        } else {
            loadTribe(userQuery)
        }
    })

function gridColumns() {
    grid = document.querySelector('.grid')
    if (window.innerWidth - 100 < 564) {
        columns = Math.floor((window.innerWidth - 100) / 72)
    } else {
        columns = 7
    }
    grid.style.gridTemplateColumns = `repeat(${columns}, 72px)`
    document.getElementsByClassName('content')[0].style.width = `${(columns * 72) + ((columns - 1) * 10)}px`
}

var queryString = window.location.search
var urlParams = new URLSearchParams(queryString)
var userQuery = urlParams.get('tribe')
var userQueryUnit = urlParams.get('unit')

if (userQuery !== 'human' && 
    userQuery !== 'elf' && 
    userQuery !== 'undead' && 
    userQuery !== 'orc') { userQuery = 'human' }

// check valid unit

if (userQueryUnit !== null) { // prioritize unit
    document.getElementById('tribe').style.display = 'none'
} else {
    document.getElementById('unit').style.display = 'none'
    gridColumns()
    window.onresize = gridColumns
}

function getUnitById(id) {
    tribes = [human, elf, undead, orc]
    for (tribe of tribes) {
        for (unit of tribe) {
            if (unit['id'] == id) {
                return unit
            }
        }
    }
}

function loadUnit(unitId) {
    var unit = getUnitById(unitId)

    document.title = unit.name

    document.getElementById('unit-name').textContent = unit['name']

    icons = document.getElementById('unit-icons')
    iconList = ['specialUnit', 'cloakingDetection', 'airAttack', 'tribe', 'sex']
    for (icon of iconList) {
        if (eval(`unit.${icon}`) !== false && eval(`unit.${icon}`) !== 0) {
            div = document.createElement('div')
            div.classList.add('unit-icon')
            if (icon === 'airAttack') {
                icon = 'air attack'
            } else if (icon === 'cloakingDetection') {
                icon = 'cloak detection'
            } else if (icon === 'specialUnit') {
                icon = 'special'
                text = document.createElement('div')
                text.textContent = unit.specialUnit
                text.classList.add('unit-icon-text')
                div.append(text)
            } else {
                icon = eval(`unit.${icon}`)
            }
            div.style.backgroundImage = `url('/assets/icons/${icon}.png')`
            div.setAttribute('title', icon)
            icons.append(div)
        }
    }

    for (i = 0; i < unit.stars; i++) {
        img = document.createElement('img')
        img.src = '/assets/star.png'
        document.getElementById('unit-stars').append(img)
    }

    back = document.getElementById('unit-back')
    back.href = `/units/?tribe=${unit.tribe}`

    evolutions = document.getElementById('unit-evolutions')
    for (evolution of unit.details.evolutions) {
        div = document.createElement('a')
        div.classList.add('unit-evolution')

        var data = getUnitById(evolution)

        div.style.backgroundImage = `url('/assets/units/${data.image}.png')`
        div.classList.add('unit')
        div.setAttribute('star', data.stars)
        div.href = `/units/?unit=${evolution}`

        type = document.createElement('div')
        type.classList.add('type')
        type.classList.add(data.type)
        div.append(type)

        if (`${evolution}` === unitId) {
            div.style.filter = 'brightness(70%)'
        }

        evolutions.append(div)
    }

    document.getElementById('unit-stats').innerHTML = `
        Attack: ${unit.details.baseAttack}
        <br>HP: ${unit.details.baseHP}
        <br>Physical Defense: ${unit.details.basePhysicalDefense}
        <br>Magical Defense: ${unit.details.baseMagicalDefense}
        <br>Attack Speed: ${unit.details.attackSpeed}
        <br>Attack Range: ${unit.details.attackRange}
        <br>Movement Speed: ${unit.details.movementSpeed}
        <br>Critical Rate: ${unit.details.criticalRate}%
        <br>Critical Damage: ${unit.details.criticalDamage}%
        <br>Respawn Time: ${unit.details.respawnTime}s
    `

    battle = document.getElementById('battle')
    for (attack of unit.details.battle) {
        p = document.createElement('p')
        p.textContent = '+ ' + attack
        battle.append(p)
    }

    abilities = document.getElementById('special-ability')
    for (ability of unit.details.specialAbility) {
        p = document.createElement('p')
        if (ability == 'None') {
            title = document.getElementById('unit-special-ability')
            title.textContent = '# Special Ability (None)'
            break
        } else {
            p.textContent = '+ ' + ability
            abilities.append(p)
        }
    }

    skills = document.getElementById('skills')
    for (skill of unit.skills) {
        div = document.createElement('div')
        div.textContent = `Gold Level ${skill.level}, ${skill.skill}`
        skills.append(div)
    }

    pet = document.getElementById('pet')
    if (unit.details.pet === null) {
        pet.style.display = 'none'
    } else {
        //
    }

    tribeSkill = document.getElementById('unit-tribe-skill')
    tribeSkill.textContent = `Tribe Skill: ${unit.details.tribeSkill}`

    fullArt = document.getElementById('full-art')
    fullArt.style.backgroundImage = `url('/assets/full-art/${unit.fullArt}.png')`

    if (unit.transMaterial !== null) {
        document.getElementById('hide-trans-material').style.display = ''
        var page = document.getElementById('trans-material')
        for (level in unit.transMaterial) {
            
            div = document.createElement('div')
            div.textContent = `# Trans Material ${parseInt(level) + 1}`

            div2 = document.createElement('div')
            div2.classList.add('trans-material-list')

            for (unitMaterial of unit.transMaterial[level]) {
                link = document.createElement('a')
                link.classList.add('unit-evolution')

                var data2 = getUnitById(unitMaterial)

                link.style.backgroundImage = `url('/assets/units/${data2.image}.png')`
                link.classList.add('unit')
                link.setAttribute('star', data2.stars)
                link.href = `/units/?unit=${data2.id}`

                type = document.createElement('div')
                type.classList.add('type')
                type.classList.add(data2.type)
                link.append(type)
                div2.append(link)
            }
            page.append(div)
            page.append(div2)
        }
    }
}

function loadTribe(tribe) {
    jsonData = eval(tribe) // get json via name

    jsonData.reverse()

    jsonData.sort(function(a, b) { // largest to smallest stars
        return b.stars - a.stars;
    });

    for (i = 0; i < jsonData.length; i++) {
        ele = document.createElement('a')
        ele.setAttribute('star', jsonData[i]['stars'])
        ele.classList.add('unit')
        ele.style.backgroundImage = `url('/assets/units/${jsonData[i]['image']}.png')`
        ele.id = jsonData[i]['id']
        ele.href = `/units/?unit=${jsonData[i]['id']}`

        type = document.createElement('div')
        type.classList.add('type')
        type.classList.add(jsonData[i]['type'])
        ele.append(type)

        grid = document.getElementById('grid')
        grid.append(ele)
    }
}

var details = document.getElementById('details')
var skills = document.getElementById('skills')
var material = document.getElementById('trans-material')
var equipment = document.getElementById('equipment')

function unitMenu(n) {
    if (n == 0) {
        details.style.display = ''
        skills.style.display = 'none'
        material.style.display = 'none'
        equipment.style.display = 'none'
    } else if (n == 1) {
        details.style.display = 'none'
        skills.style.display = ''
        material.style.display = 'none'
        equipment.style.display = 'none'
    } else if (n == 2) {
        details.style.display = 'none'
        skills.style.display = 'none'
        material.style.display = ''
        equipment.style.display = 'none'
    } else if (n == 3) {
        details.style.display = 'none'
        skills.style.display = 'none'
        material.style.display = 'none'
        equipment.style.display = ''
    }
}