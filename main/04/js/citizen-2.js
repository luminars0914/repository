function hello() {
  return "안녕하세요?";
}
function bye() {
  return "안녕히 가세요.";
}

function userCheck(name, fn) {
  console.log(`${name}님`, fn());
  //파라미터 2개를 받아서 name은 변수로 fn은 함수로 실행해라
}

userCheck("홍길동", hello);  // 홍길동 안녕하세요?
userCheck("도레미", bye);  // 도레미 안녕히 가세요.