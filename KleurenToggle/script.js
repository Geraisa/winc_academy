const home = document.querySelector(".homeColor")
const red = document.querySelector(".redColor")
const yellow = document.querySelector(".yellowColor")
const green = document.querySelector(".greenColor")
const blue = document.querySelector(".blueColor")
const purple = document.querySelector(".purpleColor")

home.addEventListener('click', e => {
    document.body.style.backgroundColor = "white";
})

red.addEventListener('click', e => {
    document.body.style.backgroundColor = "red";
})

yellow.addEventListener('click', e => {
    document.body.style.backgroundColor = "yellow";
})

green.addEventListener('click', e => {
    document.body.style.backgroundColor = "green";
})

blue.addEventListener('click', e => {
    document.body.style.backgroundColor = "blue";
})

purple.addEventListener('click', e => {
    document.body.style.backgroundColor = "purple";
})
