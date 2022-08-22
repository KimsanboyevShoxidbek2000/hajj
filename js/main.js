
// loader action
let loader = document.querySelector('.loader')
let hajjSection = document.querySelector('.hajj-section')
// menu action 
let menuAction = document.querySelector('#menu-action')
let menu = document.querySelector('#menu')
setTimeout(() => {
    loader.style.display = 'none'
    hajjSection.style.display = 'block'
}, 5000)


menuAction.addEventListener('click' , () => {
    menu.classList.toggle('menu-active')
    menuAction.classList.toggle('fa-times')
    menuAction.classList.toggle('fa-bars')
})



