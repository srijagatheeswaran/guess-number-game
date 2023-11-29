



//select input,btn,scoure
var inputbox=document.getElementById("input")
var btn=document.getElementById("btn")
var scoure=document.getElementById("h2")
var total=10

btn.addEventListener("click",function(event)
{ event.preventDefault()
  var bot=Math.floor(Math.random()*10)
  console.log(bot)
  if (bot==inputbox.value)
  {
    alert("you won")
     total=total+1
  }
  else{
    if(total<=0)
    {alert("Defect") 
    total=11
}
    
    total=total-1
    
    h2.textContent=total
    
    
  }
 
  


})
    
    





 


    
