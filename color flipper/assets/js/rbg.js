const rbg = [
    'rgb(211, 105, 29)',
    'rgb(255, 49, 255)',
    'rgb(221, 168, 33)',
    'rgb(49, 84, 255)',
    'rbg(255, 193, 7)',
    'rgb(46, 141, 87)',
    'rgb(100, 50, 150)',
    'rgb(255, 127, 113)',
    'rgb(255, 87, 34)',
    'rgb(205, 92, 92)'
];

const rbgBtn = document.getElementById('rbgBtn');
const rbgColor = document.querySelector('.rbgColor');

rbgBtn.addEventListener('click',()=>{
    const rbgRandom = rbgRandNum();
    console.log(rbgRandom);
    document.body.style.backgroundColor = rbg[rbgRandom]
    rbgColor.textContent = rbg[rbgRandom]
    
});

function rbgRandNum() {
    return Math.floor(Math.random()*rbg.length)
};