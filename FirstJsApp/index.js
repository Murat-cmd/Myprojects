document.getElementById("increment")
let Counter = document.getElementById("counter")
document.getElementById("save")
let PE = document.getElementById("saved")


var count = 0




function INCREMENT(){
  
  count += 1
  Counter.textContent = count

}

function SAVE(){
  countstr = count + ","
 PE.textContent += countstr
 Counter.textContent = 0
 
 count = 0
  
}





