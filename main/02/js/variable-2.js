const myNumber = 10;

function add(a, b) {
  return a + b;
}

let sum = add(10, 20);
console.log(sum);
sum = 100;    // let 변수는 재선언 불가능, 재할당 가능
// myNumber = 20;    // const 변수는 재할당 불가능
console.log(sum);

// var orange ="오렌지"
// var orange ="레드오렌지";
// console.log(orange);

// let x = 10;
// let sum = x+y;
// let y = 20;
// console.log(sum);

// 자바스크립트 해석기가 sum을 계산할때 y값이 할당이 안되어있음에도 변수로 이해하고 넘어가는 문제가 호이스팅