(function(){
	
	var linkWriteUs = document.querySelector('.link-write-us');
	var linkMap = document.querySelector('.link-map');
	var inputsForm = document.querySelectorAll('.input');
	var popaps = document.querySelectorAll('.modal');
	var name = document.querySelector('.name-user');
	var overlay = document.querySelector('.modal-overlay');
	var closes = document.querySelectorAll('.modal-close')

	linkWriteUs.addEventListener('click',function(e){
		e.preventDefault();
		popaps[0].classList.add('modal-show');
		overlay.classList.add('overlay-show');
		name.focus();
		for(var i = 0; i < inputsForm.length; i++){
			inputsForm[i].classList.remove('inputs-validate-error');
		}
	})

	linkMap.addEventListener('click',function(e){
		e.preventDefault();
		popaps[1].classList.add('modal-show');
		overlay.classList.add('overlay-show');
	})
	for(var i = 0; i < closes.length; i++){
		closes[i].addEventListener('click',function(e){
			e.preventDefault();
			for(var i = 0; i < popaps.length; i++){
				popaps[i].classList.remove('modal-show');
			}
			overlay.classList.remove('overlay-show');
		})
	}

	overlay.addEventListener('click',function(){
		for(var i = 0; i < popaps.length; i++){
			popaps[i].classList.remove('modal-show');
		}
		this.classList.remove('overlay-show');
	})

	document.addEventListener('keydown',function(e){
		if(e.keyCode === 27) {

			for(var i = 0; i < popaps.length; i++){
				popaps[i].classList.remove('modal-show');
			}
			overlay.classList.remove('overlay-show');
		}
	})

})();