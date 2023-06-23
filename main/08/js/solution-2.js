const raffle = document.querySelector("#raffle");

raffle.addEventListener("click", (e) => {
  e.preventDefault();  
  const seed = document.querySelector("#seed");
  const total = document.querySelector("#total");
  const result = document.querySelector("#result");
  let  winner = "";

  for(let i = 0; i < total.value; i++) {
    let picked = Math.floor((Math.random() * seed.value) + 1);
    winner += `${picked}번, `;      
    // 중복을 배제하나는 수식은 없으므로 뽑으라는 횟수만 반복해서 랜덤추룰을 하고 winner에 추가를 한다.
  }  
  
  result.innerText = `당첨자 : ${winner}`;
  result.classList.add("show");
});