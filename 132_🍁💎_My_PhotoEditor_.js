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
let resetBtn = document.querySelector('.resetBtn')
let saveBtn = document.querySelector('.saveBtn')


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
	outContainer.style.height =`50rem`

	// #1f75fe

	setInterval(() => {
		outContainer.style.boxShadow = ` 0rem 0rem 2rem .2rem #76c4fa`
	}, 800 )

	setInterval(() => {
		outContainer.style.boxShadow = ` 0rem 0rem 2rem .5rem #76c4fa`
	}, 1200 )

	setInterval(() => {
		outContainer.style.boxShadow = ` 0rem 0rem 2rem .8rem #76c4fa`
	}, 1400 )

	// setInterval(() => {
	// 	outContainer.style.boxShadow = ` 0rem 0rem 2.9rem 1.1rem #76c4fa`
	// }, 1600 )
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
			flipY = flipY === 1 ? -1 : 1
		}


		focusImage.style.transform = `rotate(${rotate}deg)  scale(${flipX}, ${flipY})`

	})
})



resetBtn.addEventListener('click', () => {


focusImage.src = `/Images/upload.png`
focusImage.classList.add('mainIMG')
focusImage.classList.remove('NewImg')


sliderInput.value = '0'
filterType.innerHTML =`VALUE`
filterMagnitude.innerHTML =`0%`
outContainer.classList.add('disabled')
outContainer.style.height =`48rem`

bright = 100,
contrAAst = 100,
GrayIsskale = 0,
Blurrr = 0,
OpaCity = 100;
rotate = 0;
flipX = 1;
flipY = 1;

focusImage.style.filter = `brightness(${bright}%) 
						   contrast(${contrAAst}%)
						   grayscale(${GrayIsskale}%)
						   blur(${Blurrr}px)
						   opacity(${OpaCity}%)`

focusImage.style.transform = `rotate(${rotate}deg)  
							  scale(${flipX}, ${flipY})`

outContainer.style.remove(setInterval())

})