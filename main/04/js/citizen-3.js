let init = () => {
  return function(a, b) {
    // return a - b > 0 ? a - b : b - a;
    return a - b > 0 ? `${a}이 ${b}보다 큼` : `${b}이 ${a}보다 큼`;
    //삼할연산자: 질문? 참일때: 거짓일때
  }
}

// console.log(`init(30, 20) : ${init(30, 20)}`);
console.log(`init()(30, 20) : ${init()(10, 20)}`);
//return 안에 return을 출력을 하는데 익명함수라서 ()를 부르고 그에 맞는 파라미터를 넣어주면 된다.
//클로저, 스코프체인이 가능하다.



let init2 = (a) => {
  return function(b) {
    return a - b > 0 ? `${a}이 ${b}보다 큼` : `${b}이 ${a}보다 큼`;
  }
}
let init10 = init2(10);
let init10fixed = init10(20);
console.log(init10fixed);