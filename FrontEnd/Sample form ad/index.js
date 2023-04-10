'use strict';

var employees = localStorage.getItem('employees');
console.log(employees);

var employee = JSON.parse(employees)[0];

function check() {
  console.log(employee);
  var uid = document.getElementById('uid').value;
  console.log(uid);
  var password = document.getElementById('password').value;
  console.log(password);
  if (employee.empMail==uid) {
    if (employee.empPassword == password) {
      alert('Login successful');
    } else {
      alert('Invalid password');
    }
  } else {
    alert('Invalid credentials');
  }
}