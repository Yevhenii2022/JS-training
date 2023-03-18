const text = document.querySelector('#text');
const link = document.querySelector('#link');

link.addEventListener('mouseover', () => {
	console.log('Mouse');
	changeStrongeColor('tomato');
});
link.addEventListener('mouseout', () => {
	console.log('Mouse');
	changeStrongeColor('green');
});

function changeStrongeColor(color) {
	const list = text.querySelectorAll('strong');
	list.forEach(el => (el.style.color = color));
}
