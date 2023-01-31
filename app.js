window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar")
    navbar.classList.toggle("sticky", window.scrollY > window.innerHeight)
})

const btn_explore = document.getElementById("btn-explore")
btn_explore.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({behavior: 'smooth'})
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((element) => {
    observer.observe(element)
})