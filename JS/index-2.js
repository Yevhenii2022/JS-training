// Делегування подій

const box = document.querySelector('.board');
const activeTD = document.querySelector('.active');

box.addEventListener('click', onClick);

function onClick(event) {
	console.dir(event.target);
	console.dir(event.currentTarget);

	if (event.target.nodeName === 'TD') {
		event.target.style.background = 'green';
	}
}

activeTD.addEventListener('click', onClickTd);

function onClickTd(event) {
	console.log('ClickTD');
	event.stopPropagation();
	event.target.style.background = 'red';
}
