function onPageLoad() {
    const btn = document.querySelector('.nav-button')
    const nav = document.querySelector('.main-navigation')
    // add a listener on btn for click
    btn.addEventListener('click', function() {
        if( nav.classList.contains('open') ) {
            // if the menu is open
            nav.classList.remove('open')
        }
        else {
            // if the menu is closed
            nav.classList.add('open')

        }
    } )
}
window.addEventListener('load', onPageLoad )