'use strict';
function Employee(name, email, department, salary) {
  this.name=name;
  this.email=email;
  this.department=department;
  this.salary=salary;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function EmpTable {
    let table = document.getElementById('myTable');
    let tableEl = document.createElement('table');
    table.appendChild(tableEl);
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    trEl.textContent=${name};
    let tdEl = document.createElement('td');
    tableEl.appendChild(tdEl);
    let th1El = document.createElement('th');
    tableEl.appendChild(th1El);



}
