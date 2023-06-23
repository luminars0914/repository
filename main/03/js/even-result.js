let userNumber = prompt("숫자를 입력하세요");

if ( userNumber !== null) {
  userNumber = parseInt(userNumber);  // null이 아니라면 정수로 변환
  // alert(userNumber);
  if (isNaN(userNumber)){
    alert(userNumber);
  }else{  
    userNumber = parseInt(userNumber);    
  (userNumber % 2 === 0) ? alert (`${userNumber} : 짝수`) :  alert(`${userNumber} : 홀수`);  
}
  // userNumber를 2로 나누어서 나머지가 없으면 짝수
} 
