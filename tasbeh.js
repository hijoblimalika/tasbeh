const title = document.querySelector(".title")
const box = document.querySelector(".box")

let count = 0

function counter(){
    count++
    title.innerHTML = count
}
function counterD(){
    count = 0
    title.innerHTML = count
}
function violet(){
    box.style.backgroundColor = "violet"
}
function dodgerblue(){
    box.style.backgroundColor = "dodgerblue"
}
function black(){
    box.style.backgroundColor = "black"
}
function white(){
    box.style.backgroundColor = "white"
}