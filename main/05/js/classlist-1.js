const title = document.querySelector("#title");
console.log(title.classList);
title.onclick = () => {
  title.classList.add("clicked");
  console.log(title.classList)
}


let desc = document.querySelector("#desc p");
title.onclick = () => {
  desc.classList.remove("user");
}