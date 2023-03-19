// / Напишіть програму JavaScript для відображення випадкового зображення (натискання кнопки) з наступного списку.

const images = [
	'https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg',
	'https://images.pexels.com/photos/1089168/pexels-photo-1089168.jpeg',
	'https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg',
];

const boxEl = document.querySelector('.js-box');
const btnEl = document.querySelector('.js-btn');

btnEl.addEventListener('click', handleBtnElClick);

function handleBtnElClick(event) {
	const randomIndex = getRandomIndex(images.length);

	const markup = `<img src="${images[randomIndex]}" alt="image" width=630px>`;
	boxEl.innerHTML = markup;
}

function getRandomIndex(max) {
	return Math.floor(Math.random() * max);
}
console.log(5555);
