let score = prompt("프로그래밍 점수 : ");
let type = typeof(score);

//사용자가 대답을 한경우
if(score != null) {
  if(isNaN(score)){  
    alert("문자열입니다.");  
  } else if (parseInt(score) >= 90) {
    alert("A 학점");
  } else if (parseInt(score) >= 80) {
    alert("B 학점");
  } else {
    alert("C 학점");
  }
}else {  
  alert("취소하셨습니다");  
}

// let num1 = 10;
// let num2 = 20;
// let small;
// small = (num1<num2) ? num1:num2;
// console.log(small);