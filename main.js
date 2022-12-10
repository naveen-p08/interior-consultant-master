const mobileToggle = document.querySelector('.mobile-toggle')
const mobileToggleBars = document.querySelector('.bars')
const mobileToggleClose = document.querySelector('.close')
const primaryNavigation = document.querySelector('#primary-navigation')
const navItems = document.querySelectorAll('.nav-list__items')

mobileToggle.addEventListener('click', () => {
    // open and close navigation
    if (primaryNavigation.getAttribute('aria-expanded') == 'false') {
        primaryNavigation.setAttribute('aria-expanded', 'true')
    } else {
        primaryNavigation.setAttribute('aria-expanded', 'false')
    }
    mobileIcon()

})

navItems.forEach(item => {
    //closes the navigation when a link is clicked
    item.addEventListener('click', () => {
        navItems.forEach(navLink => {
            navLink.classList.remove('active')
        })
        item.classList.add('active')
        primaryNavigation.setAttribute('aria-expanded', 'false')
        mobileIcon()
    })
})

let mobileIcon = function () {
    //toggle icon
    if (primaryNavigation.getAttribute('aria-expanded') == 'true') {
        mobileToggleBars.setAttribute('data-expanded', 'true')
        mobileToggleClose.setAttribute('data-expanded', 'false')
    } else {
        mobileToggleBars.setAttribute('data-expanded', 'false')
        mobileToggleClose.setAttribute('data-expanded', 'true')
    }
}