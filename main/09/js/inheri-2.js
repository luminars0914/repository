class BookC {
    constructor(title, price){
this.title = title;
this.price = price;
    }
    buy(){
        console.log(`${this.title}을(를) ${this.price}에 구매하였습니다`);
    }
}
const book1 = new BookC('자료구조',15000);
book1.buy();
// 신규 상속을 원하는 클래스
// class 신규 extends 기존클래스
class TextbookC extends BookC{
constructor(title, price,major){
    super(title, price)//기존클래스에서 가져옴
    this. major = major;
}
buyTextbook(){
    console.log(`${this.major} 전공서적, ${this.title}을(를) ${this.price}에 구매하였습니다`);  
}
}

// extends는 class안의 모든 메서드를 상속시킨다.
// super는 필요한 것만 가져올 수 있으며
// constructor에서 키값을 구성하는 용도로 사용한다.
class Textbook2C extends BookC{
    constructor(title, major){
        super(title )//기존클래스에서 가져옴
        this. major = major;
    }
    buyTextbook(){
        console.log(`${this.major} 전공서적, ${this.title}을(를) 구매하였습니다`);  
    }
    }

let book2 = new TextbookC("알고리즘",40000,'컴퓨터공학');
book2.buyTextbook();
book2.buy();

console.log(TextbookC.prototype);


let book3 = new Textbook2C("알고리즘",'컴퓨터공학');
book3.buyTextbook();
// book3.buy();
//extends와  super를 통해서 온전한객체를 만드려면 필요한것을 다 기재해야한다.
