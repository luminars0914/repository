function addSum(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }  
  return sum;
}

var num = 3;
let num3 = 10;
const num4 = 0;
//밖에 있으면 전역

console.log(`1부터 ${num}까지 더하면 : ${addSum(num)}`);  
{
  let num2 = 5;
}

// 스코프 안에있으면 지역