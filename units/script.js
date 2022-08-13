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
    loadUnit(userQueryUnit)
} else {
    document.getElementById('unit').style.display = 'none'
    gridColumns()
    window.onresize = gridColumns
    loadTribe(userQuery)
}

function getJsonById(id) {
    tempHuman = eval('human')
    tempElf = eval('elf')
    tempUndead = eval('undead')
    tempOrc = eval('orc')
    tribes = [tempHuman, tempElf, tempUndead, tempOrc]
    for (tribe of tribes) {
        for (unit of tribe) {
            if (unit['id'] == id) {
                return unit
            }
        }
    }
}

function loadUnit(unitId) {
    var unit = getJsonById(unitId)

    document.getElementById('unit-name').textContent = unit['name']

    icons = document.getElementById('unit-icons')
    iconList = ['specialUnit', 'cloakingDetection', 'airAttack', 'tribe', 'sex']
    for (icon of iconList) {
        if (eval(`unit.${icon}`) !== false && eval(`unit.${icon}`) !== 0) {
            div = document.createElement('div')
            div.classList.add('unit-icon')
            if (icon === 'airAttack') {
                icon = 'air'
            } else if (icon === 'cloakingDetection') {
                icon = 'cloak'
            } else if (icon === 'specialUnit') {
                icon = 'special'
                //
            } else {
                icon = eval(`unit.${icon}`)
            }
            div.style.backgroundImage = `url('/assets/icons/${icon}.png')`
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

        data = getJsonById(evolution)

        div.style.backgroundImage = `url('/assets/units/${data.image}.png')`
        div.classList.add('unit')
        div.setAttribute('star', data.stars)
        div.href = `/units/?unit=${data.id}`

        type = document.createElement('div')
        type.classList.add('type')
        type.classList.add(data.type)
        div.append(type)

        if (evolution === unit.id) {
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
        <br>Critical Rate: ${unit.details.criticalRate}
        <br>Critical Damage: ${unit.details.criticalDamage}
        <br>Respawn Time: ${unit.details.respawnTime}
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
var equipment = document.getElementById('equipment')

function unitMenu(n) {
    if (n == 0) {
        details.style.display = ''
        skills.style.display = 'none'
        equipment.style.display = 'none'
    } else if (n == 1) {
        details.style.display = 'none'
        skills.style.display = ''
        equipment.style.display = 'none'
    } else if (n == 2) {
        details.style.display = 'none'
        skills.style.display = 'none'
        equipment.style.display = ''
    }
}