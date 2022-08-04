var sidebar = false

function checkMobile() {
    windowWidth = window.innerWidth
    if (window.innerWidth > 740) {
        toggleSideBar(false)
    }
}

window.onresize = checkMobile

function toggleSideBar(option) {
    sidebarEle = document.getElementById('mobile-menu')
    if (sidebar == true || option == false) {
        sidebar = false
        sidebarEle.classList.add('hidden')
    } else if (sidebar == false || option == true) {
        sidebar = true
        if (sidebarEle.classList.contains('hidden')) {
            sidebarEle.classList.remove('hidden')
        }
    }
}

window.onclick = (function(e) { // close sidebar after click
    if (e.target == document.getElementById('mobile-menu-button')) { return }
    if (sidebar == true) {
        toggleSideBar(false)
    }
})

const template = `
<div class="mobile-menu hidden" id="mobile-menu">
    <script>toggleSideBar(false)</script>
    <div class="mobile-menu-pages">
        <a href="/units" class="mobile-menu-page">
            <div id="units-page-menu">&nbsp/units</div>
        </a>
        <a href="/pets" class="mobile-menu-page">
            <div id="pets-page-menu">&nbsp/pets</div>
        </a>
        <a href="/artifacts" class="mobile-menu-page">
            <div id="artifacts-page-menu">&nbsp/artifacts</div>
        </a>
    </div>
    <div class="mobile-menu-links">
        <a href='/'>
            <div class="mobile-menu-link active">Home</div>
        </a>
        <a class="mobile-menu-item" href='https://github.com/ef-utils'>
            <div class="mobile-menu-link">GitHub</div>
        </a>
        <a class="mobile-menu-item" href='/about'>
            <div class="mobile-menu-link">About</div>
        </a>
        <a class="mobile-menu-item" href='/'>
            <div class="button">Invite</div>
        </a>
    </div>
</div>
<div class="menu">
    <div class="mobile-menu-button" id="mobile-menu-button" onclick="toggleSideBar()" style="cursor: pointer;user-select: none;">a</div>
    <div class="home-icon-bg">
        <a href="/">
            <img class="home-icon" src="/assets/1066_UI_UNIT_ICONS0266.png" width="30">
        </a>
    </div>
    <a class="home" href="/">
        ef-utils<span>.github.io</span>
    </a>
    <div class="pages">
        <a href="/units">
            <div class="menu-page" id="units-page">&nbsp/units</div>
        </a>
        <a href="/pets">
            <div class="menu-page" id="pets-page">&nbsp/pets</div>
        </a>
        <a href="/artifacts">
            <div class="menu-page" id="artifacts-page">&nbsp/artifacts</div>
        </a>
    </div>
    <div class="links">
        <a href='/'>
            <div class="menu-link" id="home-link">Home</div>
        </a>
        <a href='https://github.com/ef-utils'>
            <div class="menu-link">GitHub</div>
        </a>
        <a href='/about'>
            <div class="menu-link" id="about-link">About</div>
        </a>
        <a href='/'>
            <div class="button">Invite</div>
        </a>
    </div>
</div>
`

function insertTemplate() {
    temp = document.createElement('div')
    temp.innerHTML = template
    document.body.prepend(temp)
}