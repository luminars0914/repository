let numberchk = true;
const num1 = parseInt(prompt("첫번째 양의 정수 : "));
if (isNaN(num1)){
  alert("숫자가 아닙니다");
  numberchk = false;
}else{
  numberchk = true;
} 

const num2 = parseInt(prompt("두번째 양의 정수 : "));
if (isNaN(num2)){
  alert("숫자가 아닙니다");
  numberchk = false;
}else{
  numberchk = true;
} 

let str;

if(numberchk){
// AND 연산. 둘다 true여야 결괏값 true
if (num1 % 2 === 0 && num2 % 2 === 0) {  
  str = `당신이 입력한 ${num1}과 ${num2}는 짝수입니다` ;
} else {
  str = `당신이 입력한 ${num1}과 ${num2}중에 짝수가 아닌 수가 있습니다.`;
}
alert(str);
}