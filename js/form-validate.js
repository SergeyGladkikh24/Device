(function(){
	var writeUs = document.querySelector('.modal-write-us');
	var form = document.querySelector('.form-write-us');
	var inputs = form.querySelectorAll('.input');
	var button = form.querySelector('.btn-form-submit');

	form.addEventListener('submit', function(e){

		for(var i = 0; i < inputs.length; i++){

			if(!inputs[i].value){
				e.preventDefault();

				inputs[i].classList.add('inputs-validate-error');
			}
		}
	})
})();