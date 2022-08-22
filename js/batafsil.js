let div = document.getElementById('bataf')
let closed = document.getElementById('Closed1');




function BtnOpen() {
    div.style.display = "block"
}


closed.onclick = function(){
    div.style.display = "none"
}

window.onclick = function(event) {
    if (event.target ==  document.querySelector('body')) {
    
    }
}

// 2chi modal
let div2 = document.getElementById('bataf2')
let closed2 = document.getElementById('Closed2')


function BtnOpen2(params) {
    div2.style.display = 'block'

}


closed2.onclick = function(){
    div2.style.display = "none"
}




// 3chi modal
let div3 = document.getElementById('bataf3')
let closed3 = document.getElementById('Closed3')


function BtnOpen3(params) {
    div3.style.display = 'block'

}


closed3.onclick = function(){
    div3.style.display = "none"
}
// 4 chi modal

let div4 = document.getElementById('bataf4')
let closed4 = document.getElementById('Closed4')


function BtnOpen4(params) {
    div4.style.display = 'block'

}


closed4.onclick = function(){
    div4.style.display = "none"
}

// 5chi modal 

let div5 = document.getElementById('bataf5')
let closed5 = document.getElementById('Closed5')


function BtnOpen5(params) {
    div5.style.display = 'block'

}


closed5.onclick = function(){
    div5.style.display = "none"
}