//  При натисканні на кнопку буде змінено шрифт, розмір шрифту та колір тексту абзацу
// При наступному натисканні кнопки cтилі будуть знову змінюватись
// Після кожного кліку будуть підставлятись нові значення із масивів colors, fonts, fontSizes  послідовно

const colors = ['gold', 'green', 'yellow', 'blue', 'black', 'brown', 'purple'];

const fonts = [
	'Arial',
	'Roboto',
	'Open Sans',
	'Montserrat',
	'Noto Sans',
	'Raleway',
	'Lato',
];

const fontSizes = ['12px', '3rem', '15px', '4em', '24px', '48px', '8em'];

const btn = document.querySelector('#js-style');
const paragraph = document.getElementById('text');

let index = 0;

btn.addEventListener('click', () => {
	paragraph.style.cssText = `color:${colors[index]};font:${fonts[index]};font-size:${fontSizes[index]}`;
	index = index >= colors.length - 1 ? 0 : index + 1;
});
