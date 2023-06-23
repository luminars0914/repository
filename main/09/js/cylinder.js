
const button = document.querySelector('button');

// function Cylinder(diameter,height){
//     this.cylinderDiameter = diameter;
//     this.cylinderHeight = height;
// this.getVolume = function(){
//     let radius = this.cylinderDiameter/2
//     //반지름
//     //부피구하기 = 밑면적 *높이 =반지름*반지름*파이*높이
//     return (radius*radius*Math.PI*this.cylinderHeight).toFixed(2);
// }
// }

class Cylinder {
    constructor(diameter, height) {
        this.cylinderDiameter = diameter;
        this.cylinderHeight = height;


    }
    getVolume() {
        let radius = this.cylinderDiameter / 2;
        return (radius * radius * Math.PI * this.cylinderHeight).toFixed(2);
    }
}



button.addEventListener('click', (e) => {
    e.preventDefault();
    const cyldiameter = document.querySelector('#cyl-diameter');
    const cylheight = document.querySelector('#cyl-height');
    let result = document.querySelector('#result');
    if (isNaN(parseInt(cyldiameter.value))) {
        result.innerText = `지름에 숫자를 입력하세요.`;
        document.querySelector('#cyl-diameter').value = '';
    }
    if (isNaN(parseInt(cylheight.value))) {
        result.innerText = `높이에 숫자를 입력하세요.`;
        document.querySelector('#cyl-height').value = '';
    }

    if (cyldiameter.value === '' || cylheight.value === '') {
        result.innerText = `값을 입력하세요.`;
    } else {
        let cylinder01 = new Cylinder(parseInt(cyldiameter.value), parseInt(cylheight.value));
        result.innerText = `원기둥의 부피는 ${cylinder01.getVolume()}입니다.`;
    }
});