const bttn = document.querySelector("#bttn");
const nav = document.querySelector("#nav");

//active
bttn.addEventListener("click",()=>{
        bttn.classList.toggle('active');
        nav.classList.toggle('active');        
})