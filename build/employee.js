"use strict";
function createDetail(config) {
    var newEmployee = { empFirstname: "Defualt Firstname", empLastname: "Defualt Lastname", empId: 11111, empAges: 30, empSalary: 20000, empBonus: true };
    if (config.empFirstname) {
        newEmployee.empFirstname = config.empFirstname;
    }
    if (config.empLastname) {
        newEmployee.empLastname = config.empLastname;
    }
    if (config.empId) {
        newEmployee.empId = config.empId;
    }
    if (config.empAges) {
        newEmployee.empAges = config.empAges;
    }
    if (config.empSalary) {
        newEmployee.empSalary = config.empSalary;
    }
    if (config.empBonus == true) {
        newEmployee.empSalary = calBonus(newEmployee.empSalary);
    }
    else {
        newEmployee.empBonus = false;
    }
    return newEmployee;
}
function calBonus(salary, rate) {
    if (rate === void 0) { rate = 2.5; }
    var bonus = (salary * rate);
    return bonus;
}
var myEmployee = createDetail({ empFirstname: "John", empLastname: "Doe", empId: 12015, empAges: 30, empSalary: 20000, empBonus: true });
console.log(myEmployee);
