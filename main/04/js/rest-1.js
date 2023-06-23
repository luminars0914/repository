// function addNum(...numbers) {
//   let sum = 0;

//   for (let number of numbers) 
//     sum += number;

//   return sum;
// }

// console.log(addNum(1, 3));
// console.log(addNum(1, 3, 5, 7));

// fruit = ["a","b","g"];
// console.log(fruit);
// console.log(...fruit);


function addNum(a,b){
return a+b;
}

function addNum2(...numbers){
  let sum = 0;
  for(let number of numbers)
  sum += number
  return sum;
}

console.log(addNum2(1, 3, 5, 7));
//전개구문을 파라미터에 사용하면 파라미터의 갯수와는 상관없이 유연한 계산을 해준다.