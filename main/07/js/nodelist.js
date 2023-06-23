let tsNode = document.createElement("p");
let tsTextNode = document.createTextNode('Typescript');
tsNode.appendChild(tsTextNode);
let basisNode = document.querySelectorAll("p")[1];
document.body.insertBefore(tsNode,basisNode)  