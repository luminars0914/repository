let num = 0;

function calcSum(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// function inputNumber() {
//   let numbe = 0;
//   let numbe2 = 0;
//   numbe = prompt("몇까지 더할까요?");
//   if (isNaN(numbe)){
//     numbe = inputNumber();
//   }else{
//     numbe2 = parseInt(numbe);
//     num = numbe2;
//     alert(numbe2);
//     return numbe2;
//   }  
// } 

//num = inputNumber();


let number = 'dd'; 
while (isNaN(number)){
  number = prompt("숫자를 입력하세요.");
  number = parseInt(number);  
  console.log(`1부터 ${number}까지 더하면 ${calcSum(number)}입니다.`);
}

// console.log("입력하신 숫자는 " + number + "입니다.");

// console.log(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다.`);