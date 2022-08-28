var datas;
var human;
var elf;
var undead;
var orc;

var queryString = window.location.search
var urlParams = new URLSearchParams(queryString)
var userQuery = urlParams.get('tribe')
var userQueryUnit = urlParams.get('unit')

if (userQuery !== 'human' && 
    userQuery !== 'elf' && 
    userQuery !== 'undead' && 
    userQuery !== 'orc') { userQuery = 'human' }

if (sessionStorage['data'] && typeof sessionStorage['data'] !== 'undefined' && sessionStorage['data'] !== 'null') {
    datas = JSON.parse(sessionStorage.getItem('data'))
    init()
} else {
    fetch('https://ef-utils.deta.dev')
        .then((response) => response.json())
        .then((data) => {
            datas = data
            try {
                sessionStorage.setItem('data', JSON.stringify(datas))
            } catch {
                console.log(e)
            }
            init()
        })
}

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

// check valid unit

function init() {
    human = datas['units']['human']
    elf = datas['units']['elf']
    undead = datas['units']['undead']
    orc = datas['units']['orc']

    if (userQueryUnit !== null) { // prioritize unit
        document.getElementById('tribe').style.display = 'none'
        loadUnit(userQueryUnit)
    } else {
        document.getElementById('unit').style.display = 'none'
        gridColumns()
        window.onresize = gridColumns
        loadTribe(userQuery)
    }
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
        var jsonData = getUnitById(evolution)
        var ele = getUnitImageLink(jsonData)
        ele.classList.add('unit-evolution')
        console.log(evolution, jsonData.id)
        if (`${evolution}` === unitId) {
            ele.style.filter = 'brightness(70%)'
        }
        evolutions.append(ele)
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
            
            materialListTitle = document.createElement('div')
            materialListTitle.textContent = `# Trans Material ${parseInt(level) + 1}`

            materialList = document.createElement('div')
            materialList.classList.add('trans-material-list')

            for (unitMaterial of unit.transMaterial[level]) {
                var jsonData = getUnitById(unitMaterial)
                var ele = getUnitImageLink(jsonData)
                ele.classList.add('unit-evolution')
                materialList.append(ele)
            }
            page.append(materialListTitle)
            page.append(materialList)
        }
    }
}

function loadTribe(tribe) {
    jsonData = eval(tribe) // get json via name

    jsonData.reverse()

    jsonData.sort(function(a, b) { // largest to smallest stars
        return b.stars - a.stars;
    });

    var grid = document.getElementById('grid')
    
    for (i = 0; i < jsonData.length; i++) {
        var ele = getUnitImageLink(jsonData[i])
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

function getUnitImageLink(unitData) {
    var ele = document.createElement('a')
    ele.setAttribute('star', unitData['stars'])
    ele.classList.add('unit')
    ele.style.backgroundImage = `url('/assets/units/${unitData['image']}.png')`
    ele.id = unitData['id']
    ele.href = `/units/?unit=${unitData['id']}`

    var type = document.createElement('div')
    type.classList.add('type')
    type.classList.add(unitData['type'])
    ele.append(type)

    ele.setAttribute('name', unitData['name'])
    ele.title = unitData['name']

    return ele
}

function search(e) { // https://www.w3schools.com/howto/howto_js_filter_lists.asp
    var input = document.getElementById('search-input');
    var filter = input.value.toUpperCase();
    var grid = document.getElementById('grid').children;
    var shown = [];

    for (i = 0; i < grid.length; i++) {
        txtValue = grid[i].getAttribute('name');
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            grid[i].style.display = '';
            shown.push(grid[i])
        } else {
            grid[i].style.display = 'none';
        }
    }

    if (event.key === 'Enter' && shown.length == 1) {
        window.open(shown[0].href, '_self')
    }
}