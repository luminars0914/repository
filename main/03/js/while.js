let stars = (prompt("별의 갯수 : "));
if (isNaN(stars)){
  alert(`${stars}는 숫자가 아닙니다`);
}else{
stars = parseInt(stars);
while(stars > 0) {
  document.write('*');
  stars--;
}
}