const btn = document.querySelector('button');

class Pet {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  
    run = function () {
      alert(`${this.name} is running.`);    
    }
  }

  const cheez = new Pet("치즈", "yellow");
//cheez.run();


class Cat extends Pet{
    constructor(name, color,breed){
        super(name, color)//기존클래스에서 가져옴
        this. breed = breed;
    }
    buyTextbook(){
        return `${this.breed} 품종, 이름 : ${this.name}을(를) 색깔:${this.color}입니다`;  
    }
    }
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        let result = document.querySelector('#result');
        const name = document.querySelector('#name');
        const breed = document.querySelector('#breed');
        const color = document.querySelector('#color');        

        const pet = new Cat(`${name.value}`, `${color.value}`,`${breed.value}`);    
        result.innerText = `내 애완동물은 ${pet.buyTextbook()}.`;
    })
    
