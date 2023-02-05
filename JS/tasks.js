// Напишіть функцію sumInput(), яка:
// Просить користувача ввести значення, використовуючи prompt та зберігає їх у масив.
// Закінчує запитувати значення, коли користувач введе не числове значення, порожній рядок або натисне «Скасувати».
// Підраховує та повертає суму елементів масиву.
//  P.S. Нуль 0 – вважається числом, не зупиняйте введення значень під час введення «0».

// const sumInput = () => {
// 	const array = [];
// 	while (true) {
// 		const input = prompt('enter number')
// 		const number = Number(input);
// 		if (input === null || isNaN(number)) {
// 			break;
// 		}
// 	array.push(number);

// 	}
// 	return array.reduce((acc, item) => acc + item, 0);
// };

// console.log(sumInput())

// -----------------------------------------------------//

// let sum = 0;

// while (true) {
// 	let value = +prompt("Введіть число", "");

// 	if (!value) break; // (*)

// 	sum += value;
// }
// alert("Сума: " + sum);

function countSheeps(arrayOfSheeps) {
	return arrayOfSheeps.filter(Boolean).length;
}

function countSheeps(arrayOfSheep) {
	var count = 0;

	arrayOfSheep.forEach(function (sheep) {
		if (sheep) count++;
	});

	return count;
}

function countSheeps(arrayOfSheep) {
	var num = 0;
	for (i = 0; i < arrayOfSheep.length; i++) {
		if (arrayOfSheep[i]) {
			num += 1;
		}
	}
	return num;
}
