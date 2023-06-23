function displayFavorites(first, ...favs) {
  let str = `가장 좋아하는 과일은 "${first}"군요`;
  return str;
}

console.log(displayFavorites("사과", "포도", "토마토"));

// function displayFavorites2( ...favs,first) {
//   let str = `가장 좋아하는 과일은 "${first}"군요`;
//   return str;
// }

// console.log(displayFavorites2("사과", "포도", "토마토"));


const user = ["His","name","is","Hong"];
console.log(user);
console.log(...user);