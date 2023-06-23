function add(a, b) {
  return a + b;
}

var sum = add(10, 20);
console.log(sum);
var sum = 100;   // var 변수는 재선언, 재할당 가능
console.log(sum);

let hello2 = '안\t녕\' ';
console.log(hello2);
// typeof(hello2)
// let name2=prompt("이름을 적어주세요");
// let classroom="207";
// let data2 = `${name2}님, ${classroom}호 강의실로 입장하세요`;
// console.log(data2);
// console.log(10>2);
// 객체연습

let gitbook = {
title:"깃&깃허브 입문",
pages:272

}
console.log(gitbook.title);
let fruits = ['바나나','사과','포도'];
console.log(fruits);

// 심벌
let var1 = Symbol();
let var2 = Symbol();
console.log(var1===var2);

let id = Symbol();
const member = {
  name: '장',
  [id]:12345
}
member.id = 6789;
console.log(member);