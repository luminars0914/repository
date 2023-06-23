// const factor = 5;
// // const num = 10;  
// function calc() {  
//   return num * factor;   // num 변수에 접근할 수 없음
// }
// {
//   const num = 10;  
//   let result = calc();
//   console.log(`result : ${result} `);
// }

// scope5.js page.130

const factor = 5;
function calc(num) { 
  return num*factor;
}
console.log(`${calc(100)}`);
//블록스코르 안에서 선언된 let, const변수들은 못나오는게 맞다
//함수를 선언할 당시에 파라미터를 쓰면 그 안에서의 계산에서는 문제가 없게된다.
{
  let result = calc(200);
  console.log(`${result}`);
}