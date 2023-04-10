'use strict';

var employees = [];

function test() {
  var name = document.getElementById('regisName').value;
  var mobile = document.getElementById('regisMobile').value;
  var mail = document.getElementById('regisMail').value;
  var password = document.getElementById('regisNewnPassword').value;
  var retype = document.getElementById('regisReNewPassword').value;

  if (password == retype) {
    const employee = {
      empName: name,
      empMobile: mobile,
      empMail: mail,
      empPassword: password,
    };
    employees.push(employee);
    alert('Push successful');
    localStorage.setItem('employees', JSON.stringify(employees));
  }
}