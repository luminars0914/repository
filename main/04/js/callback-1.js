// const bttn = document.querySelector("button");     // 버튼 요소 가져옴

// function display() {
//   alert("클릭했습니다.");
// }

// bttn.addEventListener("click", display);          // 버튼 클릭하면 display 함수 실행
// // 대상.addEventListener("이벤트명", 함수명);
// // 따로 선언한 함수가 없다면 대상.addEventListener("이벤트명", function(){});


const btn = document.querySelector("button");

function display() {
    alert("클릭했습니다.");
    location.href="http://naver.com";
  }
  btn.addEventListener("click", display);