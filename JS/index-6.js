// Напишіть прогрму для шифрування текстово повідомлення за допомогою шифру Цезаря

const alphabet = [
	'а',
	'б',
	'в',
	'г',
	'ґ',
	'д',
	'е',
	'є',
	'ж',
	'з',
	'и',
	'і',
	'ї',
	'й',
	'к',
	'л',
	'м',
	'н',
	'о',
	'п',
	'р',
	'с',
	'т',
	'у',
	'ф',
	'х',
	'ц',
	'ч',
	'ш',
	'Щ',
	'ь',
	'ю',
	'я',
];

const refs = {
	textEl: document.querySelector('#data'),
	btnEl: document.querySelector('#encryptBtn'),
	resultEl: document.querySelector('#text'),
};

const KEY = 3;

const onMagic = e => {
	const { value } = refs.textEl;
	console.log(value);

	const result = value
		.split('')
		.map(item => {
			let index = alphabet.indexOf(item);

			if (index === -1) {
				return item;
			}

			let finishWord = index + KEY;

			if (finishWord >= alphabet.length - 1) {
				return alphabet[finishWord - alphabet.length];
			}
			return alphabet[finishWord];
		})
		.join('');

	console.log(result);

	refs.resultEl.innerHTML = result;
};

refs.btnEl.addEventListener('click', onMagic);
