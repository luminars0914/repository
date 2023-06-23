const result = document.querySelector("#result");  // 결괏값을 표시할 부분
const firstDay = new Date("2023-04-17");  // 시작한 날
const today = new Date();  // 오늘
// let passedTime = today.getTime() - firstDay.getTime();
let passedTime = today.getTime() - firstDay.getTime();  // 시작한 날부터 오늘까지 흐른 시간(밀리초)
// console.log(passedTime);
//console.log(today.getTime());
// getTime() 1997년1월1일 기준으로 정해진 날까지 ms를 뽑아줌
let pickdate = today.toDateString();
// console.log(pickdate);
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));
// console.log(passedDay);
// let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));  // 밀리초를 일(date) 수로 계산

result.textContent = passedDay;