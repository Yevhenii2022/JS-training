// Переведіть текст вигляду border-left-width до borderLeftWidth

// Напишіть функцію camelize(str, callback), яка перетворює рядки «my-short-string» на «myShortString».

// Тобто дефіси віддаляються, а всі слова після них отримують велику букву.

// camelize("background-color", callback) == 'backgroundColor';

// camelize("list-style-image", callback) == 'listStyleImage';

// camelize("-webkit-transition", callback) == 'WebkitTransition';

function camelize(str, callback) {
	return str
		.split('-')
		.map((item, index) => {
			if (index === 0) {
				return item;
			} else {
				return callback(item);
			}
		})
		.join('');
}

function firstLetterToUpper(str) {
	return str[0].toUpperCase() + str.slice(1);
}

console.log(camelize('list-style-image', firstLetterToUpper));
