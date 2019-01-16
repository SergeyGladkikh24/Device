(function(){

	var btnControlSlides = document.querySelectorAll('.button-control');
	var slides = document.querySelectorAll('.slide');

	for(var i = 0; i < btnControlSlides.length; i++){

		btnControlSlides[i].addEventListener('click',function(e){

			e.preventDefault();

			for(var i = 0; i < btnControlSlides.length; i++){

				btnControlSlides[i].firstChild.src = 'img/slider-button-empty.svg';
			}

			for(var i = 0; i < slides.length; i++){

				slides[i].classList.add('visually-hidden');

			}

			var nameClasses = this.className;

			var count = nameClasses.match(/\d/g);

			var selector = '.' + 'slide' + count[0];

			var slide = document.querySelector(selector);

			slide.classList.remove('visually-hidden');

			this.firstChild.src = 'img/slider-button-active.svg';

		})
	}

})();