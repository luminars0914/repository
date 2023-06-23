const button = document.querySelector("button");

// button.onclick = function() {
//   document.body.style.backgroundColor = "green";
// }

function changeBackground (){
  document.body.style.backgroundColor = "green";
}
// 요소.addEventListener('이벤트명','함수명')
// button.addEventListener('click',changeBackground);

button.addEventListener('click',()=>{document.body.style.backgroundColor = "green";})