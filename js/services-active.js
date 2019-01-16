(function(){

	var buttonsServices = document.querySelectorAll('.button-service');
	var services = document.querySelectorAll('.content-services');


	for(var i = 0; i < buttonsServices.length; i++){

		buttonsServices[i].addEventListener('click',function(e){

			e.preventDefault()

			for(var i = 0; i < buttonsServices.length; i++){

				buttonsServices[i].classList.remove('button-service-active');

			}

			for(var i = 0; i < services.length; i++){

				services[i].classList.add('visually-hidden');

			}

			var nameClassesBtn = this.className;

			var count = nameClassesBtn.match(/\d/g);

			var selectorService = '.' + 'service' + '-' + 'number' + '-' + count[0];

			var service = document.querySelector(selectorService);

			service.classList.remove('visually-hidden');

			this.classList.add('button-service-active');

		})
	}
})();