const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if(this.scrollY > 0) {
        navbar.classList.remove('py-4')
        navbar.classList.add('shadow', 'py2')
    }
    else {
        navbar.classList.add('py-4')
        navbar.classList.remove('shadow', 'py2')
    }
})

//AOS
AOS.init({
    duration: 700
});