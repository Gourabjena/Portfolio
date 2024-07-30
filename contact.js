hamburger = document.querySelector(".hamburger");
let check=true;
   hamburger.onclick =function(){
    
    navBar =document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    
    if(check){
      document.getElementById("bar").className="fa-solid fa-xmark";
      let profile=document.querySelector(".allbox");  
      profile.style.visibility='hidden';
      check=false;
    }
    else{
      document.getElementById("bar").className="fa-solid fa-bars";
     let  profile=document.querySelector(".allbox");  
      profile.style.visibility='visible';
      check=true;
    }
}

const activepage=window.location.pathname;
const navlinks=document.querySelectorAll('.nav-bar ul li a ').
forEach(link =>{
    if(link.href.includes(`${activepage}`)){
        link.classList.add('active');
    }
})
