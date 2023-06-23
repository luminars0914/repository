let button = document.querySelector("button");

button.addEventListener("click", () => {
    let tsNode = document.createElement("p");
    let tsTextNode = document.createTextNode("Typescript");
    tsNode.appendChild(tsTextNode);
    
    let basisNode = document.querySelectorAll("p")[0];
    document.body.insertBefore(tsNode, basisNode);
  },{once:true});