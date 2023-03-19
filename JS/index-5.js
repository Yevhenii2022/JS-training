// Напишіть код JavaScript, щоб кубик рухався, коли настискати стрілки вверх, вниз, вілво, вправо

const cube = document.querySelector('.cube');

document.addEventListener('keydown', onMoveCube);

let step = 30;

function onMoveCube(e) {
	const top = parseInt(cube.style.top);
	const left = parseInt(cube.style.left);

	if (e.code === 'ArrowUp' && top) {
		cube.style.top = top - step + 'px';
	} else if (e.code === 'ArrowDown' && top < 500) {
		cube.style.top = top + step + 'px';
	} else if (e.code === 'ArrowLeft' && left) {
		cube.style.left = left - step + 'px';
	} else if (e.code === 'ArrowRight' && left < 600) {
		cube.style.left = left + step + 'px';
	}
}
