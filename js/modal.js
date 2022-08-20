var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//bot token
let send = document.getElementById('send')
var telegram_bot_id = "5469585305:AAFfP0rKhQFvOaFFwMUBq8PKNvbc6ZCwFjA"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = -1001645843718; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
// %0A = <br>

let closeModal = document.getElementById('close-modal');


let index = false

closeModal.addEventListener('click', () => {
    document.getElementById("name").style.display = "block";
    document.getElementById("number").style.display = "block";
    send.innerHTML = 'JO\'NATISH'
    index = false
})


send.onclick = function sendtelegram() {

    let number1 = document.getElementById('number1')
    let name1 = document.getElementById('name1')
    let u_name = document.getElementById("name").value;
    let number = document.getElementById("number").value;


    if(u_name.length > 0 && number.length >= 9) {
        let message = "Ismi: " + u_name + "%0A\nTel: " + number;
        let url = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage?chat_id=${chat_id}&text=${message}&parse_node=html`;
        let api = new XMLHttpRequest()
        api.open('POST', url, true);
        api.send()
        document.getElementById("name").value = "";
        document.getElementById("number").value = "";
        name1.style.display = 'none'
        number1.style.display = ' none'
        send.innerHTML = 'Ok'
        document.getElementById("name").style.display = "none";
        document.getElementById("number").style.display = "none";
        index = true
    }
    else if(u_name.length <= 0 && number.length >= 9) {
        name1.style.display = 'block'
    }
    else if(u_name.length <= 0 && number.length <= 9) {
        if (index == true) {
            name1.style.display = 'none'
            number1.style.display = ' none'
        }else{
            name1.style.display = 'block'
            number1.style.display = ' block'
        } 
    }
    else if (u_name.length >= 0 && number.length <= 9) {
             number1.style.display = ' block'
    }
}