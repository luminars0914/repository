const result = document.querySelector("#result");  // 결괏값을 표시할 부분
const days = document.querySelector("#days");  // 결괏값을 표시할 부분
const bttn =  document.querySelector("#bttn");
const current  =  document.querySelector("#current");
const firstDay = new Date(`${year}-${month}-${date}`);  // 시작한 날
const today = new Date();  // 오늘
let passedTime = today.getTime() - firstDay.getTime();
let pickdate = today.toDateString();

const krDate = Intl.DateTimeFormat('kr',{dateStyle:'full'}).format(today);
current.innerHTML = krDate; 

bttn.addEventListener('click',()=>{
    let year = document.querySelector("#year").value;
    let month = document.querySelector("#month").value;
    let date = document.querySelector("#date").value;
    let hours  = document.querySelector("#hours");

    const firstDay = new Date(`${year}-${month}-${date}`);  // 시작한 날

    const today = new Date();  // 오늘

    let passedTime = today.getTime() - firstDay.getTime();
    let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));
    let passedHours = Math.round(passedTime / (1000 * 60 * 60 ));

    let passedyear = Math.round(passedTime / (1000 * 60 * 60 ));
    console.log(passedyear);

    days.textContent = `${passedDay}일`;
    hours.textContent = `${passedHours}시간`;
})


