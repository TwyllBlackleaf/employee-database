const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");
const db = require("./db/connection");
const sqlQueries = require("./utils/sqlQueries");
const questions = require("./utils/questions");
const addToDB = require("./utils/AddToDB");

const showTable = function(sql) {
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            askWhatDo();
        }
        console.table(rows);
        askWhatDo();
    });
}

const askDepartment = function() {
    inquirer.prompt(questions.department)
        .then(({ departmentName }) => {
            let params = departmentName;
            db.query(addToDB.department, params, (err, row) => {
                if (err) {
                    console.log(err);
                    askWhatDo();
                }
            })
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
            let departmentId = answers.roleDepartment.split(":")[0];
            let params = [answers.roleName, answers.roleSalary, departmentId];
            db.query(addToDB.role, params, (err, row) => {
                if (err) {
                    console.log(err);
                    askWhatDo();
                }
            });
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
            let managerId = answers.employeeManager.split(":")[0];
            let roleId = answers.employeeRole.split(":")[0];
            if (managerId === 0) {
                let params = [answers.firstName, answers.lastName, roleId];
                db.query(addToDB.addNoManager, params, (err, row) => {
                    if (err) {
                        console.log(err);
                        askWhatDo();
                    }
                });
                askWhatDo();
            } else {
                let params = [answers.firstName, answers.lastName, roleId, managerId];
                db.query(addToDB.addEmployee, params, (err, row) => {
                if (err) {
                    console.log(err);
                    askWhatDo();
                }
            });
            askWhatDo();
            }
            
        })
        .catch(err => {
            console.log(err);
            askWhatDo();
        });
}

const updateRole = function() {
    inquirer.prompt(questions.updateRole)
        .then(answers => {
            let employeeId = answers.changedEmployee.split(":")[0];
            let roleId = answers.newRole.split(":")[0];
            let params = [roleId, employeeId];
            db.query(addToDB.updateEmployee, params, (err, rows) => {
                if (err) {
                    console.log(err);
                    askWhatDo();
                }
            })
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