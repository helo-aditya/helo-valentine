const box = document.querySelector('#box');

const container= document.querySelector('.noContainer');
const width = container.clientWidth; //convert %fr or width into pixels

box.addEventListener('mouseenter', () => {
    // box.style.backgroundColor = 'red';
    let xindex = Math.floor(3+ Math.random()*(width-55));
    let yindex = Math.floor(10+ Math.random()*170);
    box.style.left = `${xindex}px`;
    box.style.top = `${yindex}px`;
});
