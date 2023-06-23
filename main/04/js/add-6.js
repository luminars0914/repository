// let sum = (a, b) => {
//   let result = a + b;
//   return result;
// };

// let hi = function(){
//   return `안녕하세요`;
// }

// let hi = ()=>{
//   return `안녕하세요`;
// }

// let hi = ()=>`안녕하세요`;

// 매개변수가 1개인 화살표 함수는 소괄호 생략가능
// let user = function(user){
//   console.log(`${user}님 안녕하세요`);
// }
let user = user=>console.log(`${user}님 안녕하세요`);
user('장준희');

let sum = (a, b) => a + b
console.log(sum(4,7));
//console.log(hi());