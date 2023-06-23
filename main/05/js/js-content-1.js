let p = document.querySelector("p");
console.log(p);
let pAll = document.querySelectorAll("p");
console.log(pAll);

let pAll2 = document.querySelectorAll(".user");
// querySelectorAll로 부르면 유사배열로 들어오고 변수[인덱스번호]
console.log(pAll2[1]);

console.log(pAll2[1].innerHTML);

console.log(document.querySelector("#desc"));
console.log(document.querySelector("#desc").innerText);
console.log(document.querySelector("#desc").innerHTML);
console.log(document.querySelector("#desc").textContent);


// document.querySelector("#desc").innerText = 'ㅇㅇㅇㅇㄴㅇ';
document.querySelector("#desc").textContent = '이름 : 도시락';