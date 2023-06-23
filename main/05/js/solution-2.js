const n = document.querySelector("#number1");
let number1 = parseInt(n.value);
const m = document.querySelector("#number2");
let number2 = parseInt(m.value);
const button = document.querySelector("button");
let result = document.querySelector("#result");

button.onclick = function() {
  number1 = parseInt(n.value);
  number2 = parseInt(m.value);
  if(isNaN(number1)){
    console.log(`${number1}은 숫자가 아닙니다.`);
  }
  if(isNaN(number2)){
    console.log(`${number2}은 숫자가 아닙니다.`);
  }
  result.innerText = getGCD(number1, number2);
}

function getGCD(n, m) {
  let max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i;   
    }
  }
  return GCD;
}

