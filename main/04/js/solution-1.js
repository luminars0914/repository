function isPositive(n) {
  if (n > 0) {
    alert(`${n}은 양수입니다.`);
  } else if (n < 0) {
    alert(`${n}은 음수입니다.`);
  } else {
    alert(`${n}은 0입니다.`);
  }
}
let number = prompt('숫자를 입력하세요.');
if(number!=null){
 number = parseInt(number);
// parseInt() 는 숫자가 아닐 경우 NaN을 반환함
if(!isNaN(number)) {  // 숫자일 경우에만 실행
  isPositive(number);
}else{
  alert(`문자를 입력하시면 안됩니다`);
}
}else{
  alert("취소하셨습니다.");
  //number = prompt('숫자를 입력하세요.');
}
