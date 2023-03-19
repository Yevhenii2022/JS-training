const colorRef = document.querySelector('#colorSelect');
const inputRef = document.querySelector('#removeOption');
const addColor = document.querySelector('#add');
const btnColor = document.querySelector('#addOption');

btnColor.addEventListener('click', () => {
	if (addColor.value.trim() === '') {
		return;
	}
	const marcup = `<option>${addColor.value}</option>`;
	colorRef.insertAdjacentHTML('beforeend', marcup);
	addColor.value = '';
});

inputRef.addEventListener('click', () => {
	console.dir(colorRef);
	colorRef.selectedOptions[0].remove();
});
