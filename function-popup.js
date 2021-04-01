
var modal = document.getElementsByClassName("modal");
var trigger = document.getElementsByClassName("trigger");
var closeButton = document.getElementsByClassName("close-button");

var i;
for(i =0; i<4; i++){
    trigger[i].addEventListener("click",(event)=>{ 
        //id of popup box
        let k = event.target.id;
        modal[k].classList.toggle("show-modal")
    });
}


for(i =0; i<4; i++){
    closeButton[i].addEventListener("click",(event)=>{ 
        //id of close button 'X'
        let k = event.target.id - 100;
        modal[k].classList.toggle("show-modal")
    });
}


function windowOnClick(event) {
    var i;
    for (i =0; i<4; i++){
        if (event.target === modal[i]) {
            modal[i].classList.toggle("show-modal");
    }}
}

window.addEventListener("click", windowOnClick);


//Do not mind this code
// const modal = document.querySelector(".modal");
// const trigger = document.querySelector(".trigger");
// const closeButton = document.querySelector(".close-button");

// function toggleModal() {
//     modal.classList.toggle("show-modal");
// }

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }

// trigger.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);