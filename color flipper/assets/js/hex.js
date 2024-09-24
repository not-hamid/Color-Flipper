const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

const hexBtn = document.getElementById('btn');
const hexColor = document.querySelector('.color');

hexBtn.addEventListener('click',()=>{
    let hexRandom = '#';
    for (let i = 0; i < 6; i++) {
       hexRandom += hex[getRandHEX()]
    };

    document.body.style.backgroundColor = hexRandom;
    hexColor.textContent = hexRandom;
});

function getRandHEX() {
    return Math.floor(Math.random()*hex.length)
}