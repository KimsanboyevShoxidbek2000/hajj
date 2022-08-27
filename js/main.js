
// loader action
let loader = document.querySelector('.loader')
let hajjSection = document.querySelector('.hajj-section')
// menu action 
let menuAction = document.querySelector('#menu-action')
let menu = document.querySelector('#menu')
setTimeout(() => {
    loader.style.display = 'none'
    hajjSection.style.display = 'block'
}, 50)


menuAction.addEventListener('click', () => {
    menu.classList.toggle('menu-active')
    menuAction.classList.toggle('fa-times')
    menuAction.classList.toggle('fa-bars')
})


let menuCard = document.getElementById('map-card')
let indexMapCard = true
function openManzil() {
    if (indexMapCard) {
        menuCard.classList.add('menuCardActive')
        indexMapCard = false
        document.querySelector('.manzil').innerHTML = '<i class="fas fa-times fa-lg fa-fw"></i>'
    }
    else {
        menuCard.classList.remove('menuCardActive')
        document.querySelector('.manzil').innerHTML = '<i class="fas fa-location-dot fa-lg fa-fw"></i> Manzilimiz'
        indexMapCard = true
    }
    // alert('hi')
}


let modalcha = document.querySelector('.modalcha')
// let modalchaContent = document.querySelector('.modalcha-content')

function openModalcha() {
    modalcha.style.display = 'flex'
}

window.onclick = function (event) {
    if (event.target == modalcha) {
        // modalcha.style.display = "none";
        alert('salom')
    }

  }