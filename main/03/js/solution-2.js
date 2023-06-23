let n = prompt("1보다 큰 숫자를 입력하세요.");
let sum = 0;

if (n !== null && n > 1) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      //몫을 구하는 수식에서는 피연산자보다 같거나 클수가 없다.
      continue;
    }
    sum += i;
    document.write(`${i} ----- ${sum} <br>`);
  }
} else {
  alert('정상적으로 입력해주세요');
}