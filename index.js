const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");
const db = require("./db/connection");
const sqlQueries = require("./utils/sqlQueries");
const questions = require("./utils/questions");

const showTable = function(sql) {
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        askWhatDo();
    });
}

const askDepartment = function() {
    inquirer.prompt(questions.department)
        .then(({ departmentName }) => {
            console.log(departmentName);
            askWhatDo();
        })
        .catch(err => {
            console.log(err);
            askWhatDo();
        });
}

const askRole = function() {
    inquirer.prompt(questions.role)
        .then(answers => {
            console.log(answers.roleName + " " + answers.roleSalary);
            askWhatDo();
        })
        .catch(err => {
            console.log(err);
            askWhatDo();
        });
}

const askEmployee = function() {
    inquirer.prompt(questions.newEmployee)
        .then(answers => {
            console.log(answers.firstName + " " + answers.lastName + " " + answers.employeeRole + " " + answers.employeeManager);
            askWhatDo();
        })
        .catch(err => {
            console.log(err);
            askWhatDo();
        });
}

const updateRole = function() {
    inquirer.prompt(questions.updateRole)
        .then(answers => {
            console.log(answers.changedEmployee + " " + answers.newRole);
            askWhatDo();
        })
        .catch(err => {
            console.log(err);
            askWhatDo();
        });
}

const askWhatDo = function() {
    inquirer.prompt(questions.whatDo)
        .then(({ whatDo }) => {
            if (whatDo === "View all departments") {
                showTable(sqlQueries.departments);
            } else if (whatDo === "View all roles") {
                showTable(sqlQueries.roles);
            } else if (whatDo === "View all employees") {
                showTable(sqlQueries.employees);
            } else if (whatDo === "Add a department") {
                askDepartment();
            } else if (whatDo === "Add a role") {
                askRole();
            } else if (whatDo === "Add an employee") {
                askEmployee();
            } else if (whatDo === "Update an employee role") {
                updateRole();
            } else {
                console.log("Error: need to choose an available option");
                askWhatDo();
            }
        })
        .catch(err => {
            console.log(err);
            askWhatDo();
        });
}

const init = function() {
    askWhatDo();
}

init();