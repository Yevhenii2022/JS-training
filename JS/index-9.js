// Напишіть програму JavaScript TodoList для добавлення нових завдань у список

const input = document.querySelector('#add');

const btn = document.querySelector('#addTask');

const list = document.querySelector('#tasks');

btn.addEventListener('click', () => {
	const li = `<li class="item">${input.value}<button>remove</button></li>`;

	list.insertAdjacentHTML('beforeend', li);
	input.value = '';
});

list.addEventListener('click', event => {
	if (event.target.nodeName === 'BUTTON') {
		event.target.closest('.item').remove();
	}
});
