'use strict';

const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  list.sort(
    (a, b) =>
      getSalaryAsNum(b.dataset.salary) - getSalaryAsNum(a.dataset.salary),
  );

  const listEl = list[0].parentElement;

  list.forEach((element) => {
    listEl.append(element);
  });
}

function getEmployees(list) {
  return list.map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

function getSalaryAsNum(salary) {
  return +salary.slice(1).replace(',', '');
}

sortList(employees);
getEmployees(employees);
