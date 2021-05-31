const home = document.querySelector(".homeColor")
const red = document.querySelector(".redColor")
const yellow = document.querySelector(".yellowColor")
const green = document.querySelector(".greenColor")
const blue = document.querySelector(".blueColor")
const purple = document.querySelector(".purpleColor")
const menu = document.querySelector(".menu")
const hamburger = document.querySelector(".hamburger")


hamburger.addEventListener('click', e => {
    menu.classList.toggle('menu')
})


home.addEventListener('click', e => {
    document.body.style.backgroundColor = "white";
    menu.classList.toggle('menu')
})

red.addEventListener('click', e => {
    document.body.style.backgroundColor = "red";
    menu.classList.toggle('menu')
})

yellow.addEventListener('click', e => {
    document.body.style.backgroundColor = "yellow";
    menu.classList.toggle('menu')
})

green.addEventListener('click', e => {
    document.body.style.backgroundColor = "green";
    menu.classList.toggle('menu')
})

blue.addEventListener('click', e => {
    document.body.style.backgroundColor = "blue";
    menu.classList.toggle('menu')
})

purple.addEventListener('click', e => {
    document.body.style.backgroundColor = "purple";
    menu.classList.toggle('menu')
})


