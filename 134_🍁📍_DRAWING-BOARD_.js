const canvas = document.querySelector("canvas"),
ctx = canvas.getContext("2d");

let isDrawing = false,
brushWidth = 5;


window.addEventListener("load", () => {
	canvas.width = canvas.offsetWidth;
	canvas.height =canvas.offsetHeight;
})

const startDraw = () => {
	isDrawing = true
	ctx.beginPath(); 
	ctx.lineWidth = brushWidth;
}

const drawing = (e) => {
	if(!isDrawing) return;
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
}

canvas.addEventListener('mousemove' , startDraw); 
canvas.addEventListener('mousemove' , drawing); 
canvas.addEventListener('mouseup' , () => isDrawing = false); 