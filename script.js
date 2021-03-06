window.addEventListener('load', function OnWindowLoaded() {
	var signs = [
		'7', '8', '9', '+',
		'4', '5', '6', '-',
		'1', '2', '3', '/',
		'0', '.', '=', '*'
	];
	var calc = document.getElementById('calc');
	var textArea = document.getElementById('inputVal');

	signs.forEach(function (sign) {
		var signElement = document.createElement('div');
		signElement.className = `btn`;
		signElement.innerHTML = sign;
		calc.appendChild(signElement);
	});

	document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
		button.addEventListener('click', onButtonClick);
	});

	function onButtonClick(e) {
		if (e.target.innerHTML === 'C') {
			textArea.innerHTML = '0';
		} else if (e.target.innerHTML === '=') {
			textArea.innerHTML = parseFloat(eval(textArea.innerHTML).toFixed(7));
		} else {
			textArea.innerHTML += e.target.innerHTML;
		}
	}
});