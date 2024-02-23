const canvas = document.querySelector("canvas"),
toolBtns = document.querySelectorAll(".tool"),
ctx = canvas.getContext("2d");


let prevMouseX , prevMouseY,             
isDrawing = false,
selectedTool = "brush",
brushWidth = 5;


window.addEventListener("load", () => {
	canvas.width = canvas.offsetWidth;
	canvas.height =canvas.offsetHeight;
})

const drawRect = (e) => {
	// ctx.strokeRect(e.offsetY, e.offsetY);
}



const startDraw = () => {
	isDrawing = true;
	ctx.beginPath(); 
	ctx.lineWidth = brushWidth;
}

const drawing = (e) => {
	if(!isDrawing) return;

	if(selectedTool === "brush"){
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
	} else if(selectedTool === ""){
		drawRect(e);
	}
}

toolBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		document.querySelector(".options .active").classList.remove("active")
		btn.classList.add("active")
		selectedTool = btn.id;
		console.log(btn.id);
		console.log(selectedTool);
		
	});
})

canvas.addEventListener('mousedown' , startDraw); 
canvas.addEventListener('mousemove' , drawing); 
canvas.addEventListener('mouseup' , () => isDrawing = false); 