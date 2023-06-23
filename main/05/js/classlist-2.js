const title = document.querySelector("#title");

// title.onclick = () => {
//   title.classList.add("clicked");
// }
//classList.contains(클래스명) 소유여부를 확인
title.onclick = () => {
  if(!title.classList.contains("clicked")){
    title.classList.add("clicked");
  } else {
    title.classList.remove("clicked");
  }
}
