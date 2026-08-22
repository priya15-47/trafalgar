import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Services from './components/Services.js'
import Providers from './components/Providers.js'
import Apps from './components/Apps.js'
import Testimonials from './components/Testimonials.js'
import Articles from './components/Articles.js'
import Footer from './components/Footer.js'

document.querySelector('#app').innerHTML = `
    ${Navbar}
    ${Hero}
    ${Services}
    ${Providers}
    ${Apps}
    ${Testimonials}
    ${Articles}
    ${Footer}

`

const menuButton = document.querySelector('#menu-button')
const mobileMenu = document.querySelector('#mobile-menu')

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})
