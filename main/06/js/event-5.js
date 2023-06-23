const button = document.querySelector("#bttn");
let word2 = document.querySelector("#word");

button.addEventListener("click", () => {
  const word = document.querySelector("#word").value;   // 텍스트 상자의 내용
  const result = document.querySelector("#result");   // 결괏값 표시할 영역
  let count = word.length;   // 문자열의 길이

  result.innerText = `${count}`;  // 결괏값 표시
});


word2.addEventListener('keydown', () => {
  const word = document.querySelector("#word").value;   // 텍스트 상자의 내용
  const result = document.querySelector("#result");   // 결괏값 표시할 영역
  let count = word.length;   // 문자열의 길이
if(count>=100){
  alert('100자 이상은 적으실수없습니다.');
  document.querySelector("#word").value='';
}
  result.innerText = `${count}`;  // 결괏값 표시
});

