
const body=document.body

window.onscroll = function (e) { 
  if(window.scrollY > 100){
      body.classList.add("fixed");
     
    }
    else{
    body.classList.remove("fixed");
    console.log(window.scrollY)
  }
  } 