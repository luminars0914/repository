const box = document.querySelector("#box");

// box.addEventListener("click", (e) => {
//   alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
// });


box.addEventListener("mousemove", (e) => {
    console.log(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
  });