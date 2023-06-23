const title = document.querySelector("#title");
const userName = document.querySelector("#desc p");
const pfImage = document.querySelector("#profile img");

title.onclick = () => title.innerText = title.innerText === "My Profile" ? "프로필" :  "My Profile";
userName.onclick = () => userName.innerHTML = `이름 : <b>민들레</b>`;
// pfImage.onclick = () => pfImage.src = "images/pf2.png";


pfImage.onclick = function () {
    if (pfImage.src != "http://127.0.0.1:5500/05/images/pf2.png") {
        pfImage.src = "images/pf2.png";
    } else {
        pfImage.src = "images/pf.png";
    }
};
