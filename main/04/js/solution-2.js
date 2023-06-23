// 최대공약수 : Greatest Common Divisor (GCD)

// let number = prompt('숫자를 입력하세요.');
// if(number!=null){
//  number = parseInt(number);
// }

function getGCD(n, m) {
  let max = n > m ? n : m;
  //파라미터를 비교해서 둘중 큰수를 max에 넣는다.
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    //i는 최대치까지 반복함
    if (n % i === 0 && m % i === 0) {
      // i가 두수를 나누어서 나머지가 없는 조건
      GCD = i;   // 최대공약수
    }
  }
  return GCD;
}

let number1 = prompt('숫자를 입력하세요.')
let number2 = prompt('숫자를 입력하세요.')

console.log(`${number1}과 ${number2}의 최대공약수 : ${getGCD(number1, number2)}`);

