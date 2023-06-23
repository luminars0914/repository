const orderInfo = document.querySelector('#orderInfo');
const orderbtn = document.querySelector('#order');
const title = document.querySelector('#container > h2');

orderbtn.addEventListener('click',()=>{
    let newP = document.createElement('p');
    let textnode = document.createTextNode(title.textContent);
    newP.appendChild(textnode);
    newP.style.fontSize= "0.8rem";
    newP.style.color="red";
    orderInfo.appendChild(newP);
},{once:true})

let newImg = document.createElement("img");
srcNode = document.createAttribute('src');
altNode = document.createAttribute('alt');
srcNode.value = "images/wall.jpg";
newImg.setAttributeNode(srcNode);
newImg.setAttributeNode(altNode);
document.body.appendChild(newImg);