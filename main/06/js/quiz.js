const qimg = document.querySelector("#qimg");
let i=1;
qimg.addEventListener("mouseenter",()=>{
    i=6;
    qimg.src=`images/pic-${i}.jpg`;
    
})

qimg.addEventListener("mouseout",()=>{
    i=1;    
    qimg.src=`images/pic-${i}.jpg`;
})