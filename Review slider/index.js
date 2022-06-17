let reviews = [
{
    
    id:"1",
    name:"John",
    job:"Graphic Designer",
    Text:"hdvbcicweucbcweuceiocnejcbeukdbvsceucuwceiwcowicjeic"
},

{
    id:"2",
    name:"Tom",
    job:"Customer",
    Text:"Lorem ipsum dolor, sit amet consjkfvnklvmsjvbjfvkvnjfvnvjdnvsectetur adipuptate aliquid"
    
},
{
    id:"3",
    name:"Zainab",
    job:"Customer",
    Text:"Lorem ipsum dolor, sit amet consedjkvndjvnsklcnsdjbvs jkdbvjsdncjctetur ajcddipuptate aliquid"
    
},


]

let counter = 0;

const nameer = document.getElementById("name");
const job = document.getElementById("job");
const text = document.getElementById("text");
const nextbtn = document.getElementById("next");
const previousbtn = document.getElementById("previous");
const randombtn = document.getElementById("random");

nextbtn.addEventListener("click",function(){
 counter++
 if(counter > reviews.length - 1){
    counter = 0
 }
 getarray(counter)


}
)


previousbtn.addEventListener("click",function(){
    counter--
    if(counter < 0){
       counter = reviews.length - 1
    }
    getarray(counter)
   
   
}
)

randombtn.addEventListener("click",function(){
    counter = Math.floor(Math.random()*reviews.length);
    
getarray(counter)
   
   
}
)



function getarray(count){
 let texter = reviews[count]
  text.textContent = texter.Text
  job.textContent  = texter.job
  nameer.textContent = texter.name
}





