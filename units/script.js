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

gridColumns()
window.onresize = gridColumns

var queryString = window.location.search
var urlParams = new URLSearchParams(queryString)
var userQuery = urlParams.get('tribe')

if (userQuery !== 'human' && 
    userQuery !== 'elf' && 
    userQuery !== 'undead' && 
    userQuery !== 'orc') { userQuery = 'human' }

jsonData = eval(userQuery) // get json via name

jsonData.reverse()

jsonData.sort(function(a, b){ // largest to smallest stars
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