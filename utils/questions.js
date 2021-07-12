const sqlQueries = require("./sqlQueries");
const db = require("../db/connection");
const { roles } = require("./sqlQueries");

const getRoleChoices = function(sql) {
    var rolesList = [];

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        rows.forEach(({ title }) => {
            rolesList.push(title);
        });
    });

    return (rolesList);
}

const getEmployees = function(sql) {
    var employeeList = [];

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        rows.forEach(({ full_name }) => {
            employeeList.push(full_name);
        })
    })

    return employeeList;
}


const questions = {
    whatDo: {
        type: "list",
        name: "whatDo",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role"
        ]
    },
    department: {
        type: "input",
        name: "departmentName",
        message: "Please enter the new department name",
        validate: deptNameInput => {
            if (deptNameInput) {
                return true;
            } else {
                console.log("New department name is required.");
                return false;
            }
        }
    },
    role: [
        {
            type: "input",
            name: "roleName",
            message: "Please enter the name of the new role.",
            validate: roleNameInput => {
                if (roleNameInput) {
                    return true;
                } else {
                    console.log("New role name is required.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "roleSalary",
            message: "Please enter the salary for the new role.",
            validate: roleSalaryInput => {
                if (parseFloat(roleSalaryInput)) {
                    return true;
                } else {
                    console.log("Salary for new role is required and must be a number.");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "roleDepartment",
            message: "Please choose what department the role falls under.",
            choices: getRoleChoices(sqlQueries.inqRoles)
        }
    ],
    newEmployee: [
        {
            type: "input",
            name: "firstName",
            message: "Please enter the new employee's first name.",
            validate: firstNameInput => {
                if (firstNameInput) {
                    return true;
                } else {
                    console.log("New employee's first name is required.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "lastName",
            message: "Please enter the new employee's last name.",
            validate: lastNameInput => {
                if (lastNameInput) {
                    return true;
                } else {
                    console.log("New employee's last name is required.");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "employeeRole",
            message: "Please choose the new employee's role.",
            choices: getRoleChoices(sqlQueries.inqRoles)
        },
        {
            type: "list",
            name: "employeeManager",
            message: "Please choose the new employee's manager. (Press Enter if no manager.)",
            choices: getEmployees(sqlQueries.inqEmployees)
        }
    ]
}

module.exports = questions;