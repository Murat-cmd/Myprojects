const special_color = ["red","blue","green","black"]
const hexcode = ["0","1","2","3","4","5","6","7","8","8","9","A","B","C","D","E","F"]

const colorname = document.getElementById("bg-color")
const simplebtn = document.getElementById("special")
const hexbtn = document.getElementById("hex")
const color = document.getElementById("color")
const resetbtn = document.getElementById("Reset")
const textvalue = document.getElementById("textinput")
// const genbtn = document.getElementById("gen")


simplebtn.addEventListener("click",function(){
   let specialnumber = Math.floor(Math.random()*special_color.length);
   document.body.style.backgroundColor = special_color[specialnumber];
   color.textContent = special_color[specialnumber]
   
   
   
});

hexbtn.addEventListener("click",function(){
    let hexcolor = "#";
    for(let i = 0 ; i < 6 ; i++) {
        hexcolor += hexcode[getrandomhex()]
    }
    document.body.style.backgroundColor = hexcolor
    color.textContent = hexcolor
    hexcolor = ""
 
})

function getrandomhex(){
    return  Math.floor(Math.random()*hexcode.length)
}

resetbtn.addEventListener("click",function(){
    let hexcolor = "#"
    for(let i = 0 ; i < 6 ; i++) {
        hexcolor += hexcode[16]
    }
    document.body.style.backgroundColor = hexcolor
    hexcolor = ""
    color.textContent = ""
    textvalue.value = ""
    
})

// genbtn.addEventListener("click",function(){

//     document.body.style.backgroundColor = (textvalue.value)
//     color.textContent = (textvalue.value)

// })




