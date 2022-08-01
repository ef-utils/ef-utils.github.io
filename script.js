var sidebar = false

function checkMobile() {
    windowWidth = window.innerWidth
    if (window.innerWidth > 590) {
        toggleSideBar(false)
    }
}

window.onresize = checkMobile

function toggleSideBar(option) {
    sidebarEle = document.getElementById('mobile-menu')
    if (sidebar == true || option == false) {
        sidebar = false
        sidebarEle.style.display = 'none'
    } else if (sidebar == false || option == true) {
        sidebar = true
        sidebarEle.style.display = ''
    }
}