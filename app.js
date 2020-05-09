const canvas = document.querySelector('#draw');
const color = document.getElementById('colors');
const backColor =  document.getElementById('back-color');
const colorChange = document.getElementById('change-color');
const penWeight = document.getElementById('pen-weight');
const clearBtn = document.getElementById('clear-btn')



// canvas.style.backgroundColor = backColor.value;

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 100;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = color.value;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function changeColor(){
    canvas.style.backgroundColor = backColor.value;
}

function changePenWeight(){
    ctx.lineWidth = penWeight.value;
}
function clearCanvas(e) {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  e.preventDefault();
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
colorChange.addEventListener('click', changeColor);
penWeight.addEventListener('input',changePenWeight);
clearBtn.addEventListener('click',clearCanvas);
