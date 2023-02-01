/*
  Додайте об'єкту account методи:
  withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError) 
  де перший параметр це сума операції, а другий і третій - коллбеки,
  які приймають текст повідомлення на успіх або помилку
  Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT 
  або this.balance, в іншому випадку випадку викликає onSuccess та
  зменшує баланс на переданий amount
  Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT 
  або меньше або дорівнює нулю, в іншому випадку випадку викликає onSuccess
  та збільшує баланс на переданий amount
*/

const TRANSACTION_LIMIT = 1000;

const account = {
	firstname: "Andrii",
	lastname: "Shevchuk",
	balance: 618,
	withdraw(amount, onSuccess, onError) {
		if (amount > TRANSACTION_LIMIT) {
			onError("Сума є більшою за ліміт транзакцій");
		} else if (amount > this.balance) {
			onError("Сума є більшою ніж є на балансі");
		} else {
			this.balance -= amount;

			onSuccess("Зняття відбулось успішно");
		}
	},
	deposit(amount, onSuccess, onError) {
		if (amount > TRANSACTION_LIMIT) {
			onError("Сума є більшою за ліміт транзакцій");
		} else if (amount <= 0) {
			onError("Cума зняття є меншою або рівна нулю");
		} else {
			this.balance += amount;

			onSuccess("Поповнення відбулось успішно");
		}
	},
};

function handleSuccess(message) {
	console.log(`✅ Success! ${message}`);
}

function handleError(message) {
	console.log(`❌ Error! ${message}`);
}

account.withdraw(400, handleSuccess, handleError);
account.withdraw(400, handleSuccess, handleError);
account.withdraw(6000, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
