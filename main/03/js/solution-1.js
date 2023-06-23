const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 1, 2, 50, 100, 6, 4];

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] > 10) {
//    document.write(`${arr[i]}, `);
//   }
// }
let comma = '';
for (data of arr) {
  if (data > 10) {
    document.write(`${comma}${data} `);
    comma = ' ,';
  }
}