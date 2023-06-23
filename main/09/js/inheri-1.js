function Book(title,price){
    this.title=title;
    this.price=price;


}
Book.prototype.buy =function (){
    console.log(`${this.title}을(를) ${this.price}에 구매하였습니다`);
}

const book1= new Book("html기초",2500);
console.log(book1);

const book2= new Book("html기초",3500);
console.log(book2);
// book1.buy();
// 기존 생성자 함수를 재활용하고싶을때 .call()을 활용한다.
// 기존 생성자 함수.call(기존파라미터, 새 파라미터들)
function Textbook(title,price,major){
 Book.call(this,title,price)
 this.major = major;
}

const book3 = new Textbook("자바스크립트",30000,'컴퓨터 공학');

console.log(book3);
Textbook.prototype.buyTextbook = function(){
    console.log(`${this.major} 전공서적,${this.title}을(를) ${this.price}에 구매하였습니다`);    
}

// console.log(book3.buyTextbook());
// book3.buyTextbook()

// let book4 = Object.setPrototypeOf(목표, 붙이려는 대상)
Object.setPrototypeOf(Textbook.prototype, Book.prototype);
const book4 = new Textbook("알고리즘",40000,'컴퓨터 공학');

console.log(book4);
book4.buy();