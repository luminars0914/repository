let clock = () => {
    const today = new Date();
    const displayDate = document.querySelector('#today');
    const displayTime = document.querySelector("#clock");
    const krDate = Intl.DateTimeFormat('kr',{dateStyle:'full'}).format(today);
    displayDate.innerHTML = krDate;    
    const krTime = Intl.DateTimeFormat('kr',{timeStyle:'medium'}).format(today);
    displayTime.innerHTML = krTime;
}
setInterval(clock, 1000);