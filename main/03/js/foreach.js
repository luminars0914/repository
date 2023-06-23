const students = ["Park", "Kim", "Lee", "Kang","Jang","Ryu"]; 

// students.forEach(function(student) {
//   document.write(`${student} `)
// });

// 화살표 함수를 사용한다면
students.forEach(student => document.write(`${student}<br> `));



const fruits = ["apple", "banana", "tomato"]; 
fruits.forEach(fruit => document.write(`${fruit}, `));