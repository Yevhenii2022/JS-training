// debugger;

//  у VSC додати емодзі - натискаєш win + Ю

/*
  У нас є об'єкт salaries з зарплатами
  Створіть функцію topSalary(salaries), яка повертає ім'я найбільш
  високооплачуваного працівника
  Якщо об'єкт salaries пустий то повернути null
  Якщо декілька людей з одною тою самою зарплатою є найбільш високоплачуваними, можна 
  повернути будь-якого з них
*/

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  const entries = Object.entries(salaries);

  // console.log(entries);

  let topSalary = 0;

  let topPaidEmployee = null;

  for (let [name, salary] of entries) {
    if (salary > topSalary) {
      topSalary = salary;
      topPaidEmployee = name;
    }
  }

  return topPaidEmployee;
}

console.log(topSalary(salaries));
