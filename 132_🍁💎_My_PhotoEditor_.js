let uploadBtn = document.querySelector('#uploaD button')
let uploadInput = document.querySelector('#uploaD input')
let focusImage = document.querySelector('.image_div  img')
let outContainer = document.querySelector('.out_container')
let filterBtns = document.querySelectorAll('.filters button')
let sliderInput = document.querySelector('.slider input')
let filterType = document.querySelector('.filter_type')
let filterMagnitude = document.querySelector('.value')
let transformBtns = document.querySelectorAll('.transfromers  button')
// let allBtnsofDOC = document.querySelectorAll('button')


let bright = 100,
contrAAst = 100,
// saturate = 100,
GrayIsskale = 0,
Blurrr = 0,
OpaCity = 100;
rotate = 0;
flipX = 1;
flipY = 1;




uploadBtn.addEventListener('click', () => uploadInput.click());

uploadInput.addEventListener('change', () => {
	let newUrl = URL.createObjectURL(uploadInput.files[0])
	focusImage.src = newUrl
	focusImage.classList.remove('mainIMG')
	focusImage.classList.add('NewImg')
	outContainer.classList.remove('disabled')
})



filterBtns.forEach((ele) => {
	ele.addEventListener('click', () => {
		document.querySelector('.activeBtn').classList.remove('activeBtn')
		ele.classList.add('activeBtn')
		
		filterType.innerHTML = ele.id.toUpperCase()

		if(ele.id === 'Brightness'){
			sliderInput.max = '400';
			sliderInput.value = bright;
			// filterMagnitude.innerText = `${bright}`
		}
		else if(ele.id === 'Contrast'){
			sliderInput.max = '400';
			sliderInput.value = contrAAst;
		}
		// else if(ele.id === 'saturate'){
		// 	sliderInput.max = '200';
		// 	sliderInput.value = saturate;
		// } 
		else if(ele.id === 'Grayscale'){
			sliderInput.max = '400';
			sliderInput.value = GrayIsskale;
		}
		else if(ele.id === 'Blur'){
			sliderInput.max = '100';
			sliderInput.value = Blurrr;
		}
		else if(ele.id === 'opacity'){
			sliderInput.max = '100';
			sliderInput.value = OpaCity;
		}
	})
})





function editImage ()  {
	filterMagnitude.innerHTML = `${sliderInput.value}%`
	let activeSlider = document.querySelector('.filters  .activeBtn')

	if(activeSlider.id === 'Brightness'){
		bright = sliderInput.value
	}
	else if(activeSlider.id === 'Contrast'){
		contrAAst = sliderInput.value
	}
	// else if(activeSlider.id === 'saturate'){
	// 	saturate = sliderInput.value
	// }
	else if(activeSlider.id === 'Grayscale'){
		GrayIsskale = sliderInput.value
	}
	else if(activeSlider.id === 'Blur' ){
		Blurrr = sliderInput.value
	}
	else if(activeSlider.id === 'opacity' ){
		OpaCity = sliderInput.value
	}

	focusImage.style.filter = `brightness(${bright}%)
							   contrast(${contrAAst}%)
							   grayscale(${GrayIsskale}%)
							   blur(${Blurrr}px)
							   opacity(${OpaCity}%)
							   `;
							   //    saturate(${saturate}%))

}



sliderInput.addEventListener('input', editImage );



transformBtns.forEach((el) =>{
	el.addEventListener('click', () => {
		document.querySelector('.activeBtn').classList.remove('activeBtn')
		el.classList.add('activeBtn')

		// filterType.innerHTML = el.id.toUpperCase()
		
		if(el.id === 'Rotate-Left' ){
			rotate -= 90
		}
		else if(el.id === 'Rotate-Right' ){
			rotate += 90
		}
		else if(el.id === 'Flip-Horizontal' ){
			flipX = flipX === 1 ? -1 : 1
		}
		else if(el.id === 'Flip-Vertical' ){
			flipX = flipX === 1 ? -1 : 1
		}

		
		focusImage.style.transform = `rotate(${rotate})  scale(${flipX}, ${flipY})`

	})
})

