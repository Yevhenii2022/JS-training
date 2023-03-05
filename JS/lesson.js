// За допомогою методу forEach потрібно заповнити масив uploadedFiles
// baseUrl потрібно передати, як this

const imagesName = [
	'car.png',
	'grass.png',
	'avatar.png',
	'user.png',
	'sea.png',
	'water.png',
	'bird.png',
];
const baseUrl = { domain: 'domain-name.com' };
let uploadedFiles = [];

const resultUploadedFiles = [
	'domain-name.com/upload/car.png',
	'domain-name.com/upload/grass.png',
	'domain-name.com/upload/avatar.png',
	'domain-name.com/upload/user.png',
	'domain-name.com/upload/sea.png',
	'domain-name.com/upload/water.png',
	'domain-name.com/upload/bird.png',
];

imagesName.forEach(function (elem) {
	console.log(this);
	uploadedFiles.push(`${this.domain}/upload/${elem}`);
}, baseUrl);

console.log(uploadedFiles);

// const result = imagesName.map(item => {
// 	return `${baseUrl.domain}/upload/${item}`;
// });

const result = imagesName.reduce((acc, item) => {
	acc.push(`${baseUrl.domain}/upload/${item}`);

	return acc;
}, []);

console.log(result);
// ------------------------------!----------------------------

// Напишіть функцію addItemToBasket, яка буде за допомогою методу find перевіряти, чи є вже такий продукт в кошику
// Якщо він є, то потроібно оновити його в коризні
// Якщо немає, то потрібно додати новий продукт до кошику покупок

const tShirt = {
	id: 33,
	title: 'T-shirt',
	price: 99,
	count: 1,
};

const jeans = {
	id: 29,
	title: 'Jeans',
	price: 199,
	count: 1,
};

let basketItems = [
	{
		id: 28,
		title: 'iPhone 14',
		price: 1599,
		count: 3,
	},

	{
		id: 29,
		title: 'Jeans',
		price: 199,
		count: 2,
	},
];

function addItemToBasket(product) {
	const currentProduct = basketItems.find(elem => elem.id === product.id);
	console.log(currentProduct);
	if (!currentProduct) {
		return [...basketItems, product];
	} else {
		return basketItems.map(elem => {
			if (elem.id === product.id) {
				return {
					...elem,
					count: elem.count + 1,
				};
			} else {
				return elem;
			}
		});
	}
}
console.log(basketItems);

basketItems = addItemToBasket(tShirt);
basketItems = addItemToBasket(jeans);

console.log(basketItems);

const total = basketItems.reduce((acc, elem) => {
	return elem.price * elem.count + acc;
}, 0);

console.log(total);

// Напишіть функцію для видалення елеменів із корзини
let basketItems2 = [
	{
		id: 28,
		title: 'iPhone 14',
		price: 1599,
		count: 3,
	},
	{
		id: 29,
		title: 'Jeans',
		price: 199,
		count: 2,
	},
	{
		id: 33,
		title: 'T-shirt',
		price: 99,
		count: 1,
	},
];

function removeItemForBaskets(removeItemId) {
	return basketItems.filter(elem => elem.id !== removeItemId);
}
console.log(removeItemForBaskets(33));

// Напишіть метод, який очищає масив від усіх непотрібних елементів, таких як false, undefined, порожні рядки, нуль, null

const data = [0, 1, false, 2, undefined, '', 3, null];

// const filteredItems = array => array.filter(value => value);
const filteredItems = array => array.filter(Boolean);
console.log(filteredItems(data));

// Перетворіть масив об’єктів виборців на підрахунок кількості людей, які проголосували

function totalVotes(array) {
	return array.filter(value => value.voted).length;
}

const voters = [
	{ name: 'Bob', age: 30, voted: true },
	{ name: 'Jake', age: 32, voted: true },
	{ name: 'Kate', age: 25, voted: false },
	{ name: 'Sam', age: 20, voted: false },
	{ name: 'Phil', age: 21, voted: true },
	{ name: 'Ed', age: 55, voted: true },
	{ name: 'Tami', age: 54, voted: true },
	{ name: 'Mary', age: 31, voted: false },
	{ name: 'Becky', age: 43, voted: false },
	{ name: 'Joey', age: 41, voted: true },
	{ name: 'Jeff', age: 30, voted: true },
	{ name: 'Zack', age: 19, voted: false },
];

console.log(totalVotes(voters));

// Напишіть функцію, яка рахує кількість входжень значення в масив
let arr = [2, 4, 3, 1, 2, 1, 3, 1, 5, 2, 1];

const countOfArray = (array, number) =>
	array.filter(value => value === number).length;

console.log(countOfArray(arr, 2));

// Розробники люблять скорочувати все:
//   k8s означає Kubernetes, a11y означає accessibility, l10n означає localization.
//   Ви отримуєте нумероніми Dev, беручи першу та останню букви та підраховуючи кількість букв між ними.
//   Слова, що містять менше 4 літер, не скорочуються, тому що це було б просто дивно.
//   Змінна input  є реченням, і ви повинні скорочувати кожне слово довжиною 4 літери або більше.
//   У реченні не буде розділових знаків. g2d l2k e6e

const input = 'Every developer likes to mix kubernetes and javascript';
// Result 'E3y d7r l3s to mix k8s and j8t'

const result2 = input
	.split(' ')
	.map(elem => {
		if (elem.length < 4) {
			return elem;
		} else {
			return `${elem[0]}${elem.length - 2}${elem[elem.length - 1]}`;
		}
	})
	.join(' ');

console.log(result2);

// Напишіть функцію, яка повертає об'єкт, що складається зі значень вкладених масивів. Перше значення – ключ, друге – зачення.
// Очікуваний результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }

function getParams(array) {
	return array.reduce((acc, [key, value]) => {
		acc[key] = value;
		return acc;
	}, {});
}

// function getParams(array) {
// 	return Object.fromEntries(array);
// }

console.log(
	getParams([
		['a', 1],
		['b', 2],
	]),
);

// Сортувати у порядку за зменшенням
let arr3 = [5, 2, 1, -10, 8];

function sortNumbers(array) {
	array.sort((a, b) => b - a);
}
sortNumbers(arr3);
console.log(arr3);

// Напишіть функцію sortByAge(users), яка приймає масив об'єктів із властивістю age та сортує їх за ним.
let bruce = { name: 'Bruce', age: 25 };
let jhon = { name: 'Jhon', age: 30 };
let maria = { name: 'Maria', age: 28 };
let arr4 = [bruce, jhon, maria];
sortByAge(arr);

// тепер: [bruce, maria, jhon];
function sortByAge(array) {
	array.sort((a, b) => a.age - b.age);
}

console.log(arr4);

// Напишіть функцію додавання необмежених чисел
// Функція addNumber() повертає суму всіх чисел, переданих як аргументи функції.

function addNumber(...numbers) {
	return numbers.reduce((acc, number) => {
		return acc + number;
	}, 0);
}

console.log(addNumber(2, 4, 5)); // 11
console.log(addNumber(10, 45, 34, 130)); // 219

// ---------------------!-----------------------
function shoppingSpree(arr) {
	return arr.reduce((acc, { price }) => {
		return acc + price;
	}, 0);
}

const wishlist = [
	{ title: 'Tesla Model S', price: 90000 },
	{ title: '4 carat diamond ring', price: 45000 },
	{ title: 'World tour', price: 25000 },
	{ title: 'Gold fidgit spinner', price: 2000 },
	{ title: 'A second Tesla Model S', price: 90000 },
];

console.log(shoppingSpree(wishlist));

// Отримайте ініціали імені
// Даний рядок із кількох слів із одним пробілом між кожним із них. Скоротіть назву та поверніть ініціали імені.

const input1 = 'George Raymond Richard Martin';
// Result 'GRRM'

const initials = input1
	.split(' ')
	.map(elem => elem[0])
	.join('');

console.log(initials);

// Потрібно отримати URL адресу із адресного рядка бразуера.
// Далі необхідно параметри запиту записати в об'єкт  (query) - ключ, значення (axios)

const link =
	'https://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311';

const url = new URL(link);

console.log(url);

function makeObj(str) {
	const url = new URL(str).search.slice(1);
	console.log(url);

	// return url.split('&').reduce((acc, item) => {
	// 	const [key, value] = item.split('=');
	// 	acc[key] = value;
	// 	return acc;
	// }, {});

	return Object.fromEntries(
		url.split('&').reduce((acc, item) => {
			acc.push(item.split('='));

			console.log(acc);

			return acc;
		}, []),
	);
}

console.log(makeObj(link));
