hamburger = document.querySelector(".hamburger");
let check=true;
   hamburger.onclick =function(){
    
    navBar =document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    
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

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Hasi", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Dil mera na sune", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "Pal", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "Tum hi Aana", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "Pehele bhi main", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "Gulli matta", filePath: "6.mp3", coverPath: "6.jpg"},
    {songName: "Kaise hua", filePath: "7.mp3", coverPath: "7.jpg"},
    {songName: "Dil ko karaar", filePath: "8.mp3", coverPath: "8.jpg"},
    {songName: "aashiqui Aa gayi", filePath: "9.mp3", coverPath: "9.jpg"},
    {songName: "Adhuri kahani", filePath: "10.mp3", coverPath: "10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})