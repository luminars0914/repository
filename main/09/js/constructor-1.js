function Book(a, b, d = false) {
  this.title = a;
  this.pages = b;
  this.done = d;
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  };
}

const book1 = new Book("웹 표준의 정석", 648, false);
console.log(book1);
// const book2 = new Book("점프 투 파이썬", 360, true);

// console.log(`${book1.title} - ${book1.pages}쪽 - ${book1.finish()}`);
// console.log(`${book2.title} - ${book2.pages}쪽 - ${book2.finish()}`);

const book3 = new Book("점프 투 파이썬2", 548);
const book4 = new Book("Vue.JS입문", 230,false);
const book5 = new Book("점프 투 파이썬4", 650);
const book6 = new Book("점프 투 파이썬5", 700);

console.log(`${book4.title} - ${book4.pages}쪽 - ${book4.finish()}`);
