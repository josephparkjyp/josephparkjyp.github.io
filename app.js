// Sticks the navigation bar (which is located just below the home section)
// to the top of the screen after the bar reaches the top of the page.
// Unsticks once the home section is in view again.
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav')
    nav.classList.toggle('sticky', window.scrollY > window.innerHeight)
})

// Pressing the "Explore My Work" button smooth-scrolls down to the about section.
// Note: Begun dev process with this button so insted of changing to an a tag
// I kept it since the CSS was already well written.
const btn_explore = document.getElementById('btn-explore')
btn_explore.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({behavior: 'smooth'})
})

// Observes whether an element is viewable. If it is, fade in the element.
// Optionally, can add an else to remove the 'show' class.
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((element) => {
    observer.observe(element)
})



const hamburger = document.querySelector('.hamburger')
const nav_ul = document.querySelector('.nav-ul')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    nav_ul.classList.toggle('active')
})