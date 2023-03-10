/* Напиши скрипт управління особистим кабінетом інтернет-банку.
  
  Є об'єкт account, в якому необхідно реалізувати методи для роботи
  з балансом та історією транзакцій
*/

const Transaction = {
	DEPOSIT: 'deposit',
	WITHDRAW: 'withdraw',
};

const account = {
	// Поточний баланс рахунку
	balance: 5000,

	// Исторія транзакцій
	transactions: [{ amount: 5000, id: 1676731230818, type: 'deposit' }],

	/*
    Метод createTransaction створює та повертає об'єкт транзакції.
    Приймає суму та тип транзакції.
  */

	createTransaction(amount, type) {
		console.log(this);

		const transaction = { amount, type, id: Date.now(), date: new Date() };

		return transaction;
	},

	getBalance() {
		return this.balance;
	},

	/*
    Метод deposit, що відповідає за додавання суми до балансу
    Приймає суму транзакції
    Викликає createTransaction для створення об'єкта транзакції
    та додавання його в історію транзакцій
  */

	deposit(amount) {
		this.balance += amount;

		const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

		this.transactions.push(transaction);
	},

	/*
    Метод withdraw, що відповідає за зняття суми з балансу.
    Приймає суму транзакції
    Якщо сума зняття більша за поточний баланс, виводь повідомлення
    про те, що зняття такої суми не можливо - недостатнє коштів
    
    Викликає createTransaction для створення об'єкта транзакції
    та додавання його в історію транзакцій.
  */

	withdraw(amount) {
		if (amount > this.balance) {
			console.log(`зняття ${amount} не можливе - недостатньо коштів`);
			return;
		}

		this.balance -= amount;

		const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

		this.transactions.push(transaction);
	},

	//Метод шукає та повертає об'єкт транзакції по id
	getTransactionDetails(findId) {
		return this.transactions.find(({ id }) => id === findId);
	},

	//Метод повертає кількість засобів певного типу
	//транзакції з історії транзакцій
	getTransactionType(findType) {
		return this.transactions.filter(({ type }) => type === findType);
	},
};

console.log(account);

account.deposit(10000);

account.deposit(50000);

account.withdraw(30000);

account.withdraw(45000);

console.log(account);

console.log(account.getTransactionDetails(1676731230818));

console.log(account.getTransactionType(Transaction.DEPOSIT));

console.log(account.getTransactionType(Transaction.WITHDRAW));
