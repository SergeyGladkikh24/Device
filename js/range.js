(function(){

	var valueRange = document.querySelector('.bar-range');
	var fallowingValue = document.querySelector('.fallowing-value');

	fallowingValue.innerHTML = 'до ' + valueRange.value;

	function toChangeBehaviorSlider(){

		var nameBrowser = document.querySelector('html').getAttribute('data-nameBrowser');
		var val;

		if (nameBrowser === 'IE') {

			val = this.value;
			fallowingValue.innerHTML = 'до ' + val;

		} else {

			val = this.value;
			var max = this.getAttribute('max');
			var sizeBackground = val / max * 100;
			valueRange.style.backgroundImage = '-webkit-linear-gradient(left,#91c92f 0%,#91c92f ' + sizeBackground + '%, #dbdbdb ' + sizeBackground + '%, #dbdbdb 100%)';
			fallowingValue.innerHTML = 'до ' + val; 
		}
	}

	valueRange.addEventListener('input',toChangeBehaviorSlider);
	valueRange.addEventListener('change',toChangeBehaviorSlider)

})();

