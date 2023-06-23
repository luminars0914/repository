const username = document.querySelector("#username");
const major = document.querySelector("#major");
const bttn = document.querySelector("form > button");

bttn.addEventListener("click", (e) => {
    e.preventDefault();
    let tbody = document.querySelector("#attendant > tbody");
    let newTr = document.createElement("tr");  
    let nameTd = document.createElement("td");
    nameTd.innerText = username.value;
    username.value = "";
  // 두번째 셀에 입력한 전공 넣기
  let majorTd = document.createElement("td");  
  majorTd.innerText = major.value;  
  major.value = "";

  let btnTd = document.createElement("td");  
  btnTd.innerHTML = '<span class="delbtn"">삭제</span>';  

  // 두 셀을 새 줄에 추가하기
  newTr.appendChild(nameTd);
  newTr.appendChild(majorTd);
  newTr.appendChild(btnTd);

  // 새 줄을 tbody에 추가하기
  tbody.appendChild(newTr);

  const delButtons = document.querySelectorAll(".delbtn");
  for (let delButton of delButtons) {
      delButton.addEventListener('click', function () {
          this.parentNode.parentNode.remove(this);
      });
  }

});