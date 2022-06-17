const number = document.getElementById("number")
const incbtn = document.getElementById("increase")
const decbtn = document.getElementById("decrease")
const resetbtn = document.getElementById("reset")
let   count  = 0

incbtn.addEventListener("click",function(){
    count += 1
    number.textContent = count
})

decbtn.addEventListener("click",function(){
    count -= 1
    number.textContent = count
})

resetbtn.addEventListener("click",function(){
    count = 0
    number.textContent = count
})

