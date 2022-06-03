let myLeads = []
const textfunc = document.getElementById("text")
const savefunc = document.getElementById("save")
const uList = document.getElementById("list")
const leady = JSON.parse(localStorage.getItem("myLeads"))
const deletebtn = document.getElementById("delete")
const tabbtn = document.getElementById("tab")


if(leady){
  myLeads = leady
  render(myLeads)
}

tabbtn.addEventListener("click",function(){
 chrome.tabs.query({active:true , currentWindow:true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  
  }
    
    )
  

})


deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
   


savefunc.addEventListener("click", function(){

 myLeads.push(textfunc.value)
 textfunc.value = ""

 localStorage.setItem("myLeads",JSON.stringify(myLeads))
 render(myLeads)

})

function render(Leads){
 let listedleads = ""
 for (i = 0 ; i < Leads.length ; i++){

    listedleads += `
    <li>
     <a target = '_blank' href =${Leads[i]}>${Leads[i]}
     </a>
    </li>`
}

 uList.innerHTML= listedleads
}