
navBar =document.querySelector(".nav-bar");
   navBar.onclick=function(){
       navBar.classList.toggle("active");
   }
hamburger = document.querySelector(".hamburger");
let check=true;
   hamburger.onclick =function(){
    
    
    
    if(check){
        document.getElementById("bar").className="fa-solid fa-xmark";
      let profile=document.querySelector(".container1-logo");  
      profile.style.display='none';
      check=false;
    }
    else {
        document.getElementById("bar").className="fa-solid fa-bars";
     let  profile=document.querySelector(".container1-logo");  
      profile.style.display='flex';
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

 
/*end of header*/
var typed = new Typed(".auto-type", {
    strings: [" Full Stack Developer", "Web Designer", "freelancer"],
    typeSpeed: 150,
    backspeed: 150,
    loop: true
})
//  1st container end

//stating  of skill javascript
let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
    progressEndValue = 90,    
    speed = 50;
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);
let circularProgress1 = document.querySelector(".circular-progress1"),
    progressValue1 = document.querySelector(".progress-value1");

let progressStartValue1 = 0,    
    progressEndValue1 = 80,    
    speed1 = 50;
    
let progress1 = setInterval(() => {
    progressStartValue1++;

    progressValue1.textContent = `${progressStartValue1}%`
    circularProgress1.style.background = `conic-gradient(#7d2ae8 ${progressStartValue1 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue1 == progressEndValue1){
        clearInterval(progress1);
    }    
}, speed1);
let circularProgress2 = document.querySelector(".circular-progress2"),
    progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,    
    progressEndValue2 = 85,    
    speed2 = 50;
    
let progress2 = setInterval(() => {
    progressStartValue2++;

    progressValue2.textContent = `${progressStartValue2}%`
    circularProgress2.style.background = `conic-gradient(#7d2ae8 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue2 == progressEndValue2){
        clearInterval(progress2);
    }    
}, speed2);
let circularProgress3 = document.querySelector(".circular-progress3"),
    progressValue3 = document.querySelector(".progress-value3");

let progressStartValue3 = 0,    
    progressEndValue3 = 80,    
    speed3 = 50;
    
let progress3 = setInterval(() => {
    progressStartValue3++;

    progressValue3.textContent = `${progressStartValue3}%`
    circularProgress3.style.background = `conic-gradient(#7d2ae8 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue3 == progressEndValue3){
        clearInterval(progress3);
    }    
}, speed3);
