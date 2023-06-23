const title = document.querySelector("#title");

//classList.toggle("클래스명") 대상클래스를 넣었다 뺐다.
title.onclick = () => {
  title.classList.toggle("clicked");
}
