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
        rows.forEach((row) => {
            rolesList.push(row.id + ": " + row.title);
        });
    });

    return rolesList;
}

const getDepartments = function(sql) {
    var departmentsList = [];

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        rows.forEach((row) => {
            departmentsList.push(row.id + ": " + row.name);
        });
    });

    return departmentsList;
}

const getEmployees = function(sql) {
    var employeeList = [];

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        rows.forEach((row) => {
            employeeList.push(row.id + ": " + row.full_name);
        })
    })

    return employeeList;
}

const getManagers = function(sql) {
    var managersList = getEmployees(sql);
    managersList.push("0: None");
    return managersList;
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
            choices: getDepartments(sqlQueries.inqDepartments)
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
            message: "Please choose the new employee's manager.",
            choices: getManagers(sqlQueries.inqEmployees)
        }
    ],
    updateRole: [
        {
            type: "list",
            name: "changedEmployee",
            message: "Please choose an employee to update.",
            choices: getEmployees(sqlQueries.inqEmployees)
        },
        {
            type: "list",
            name: "newRole",
            message: "Please choose the employee's new role.",
            choices: getRoleChoices(sqlQueries.inqRoles)
        }
    ]
}

module.exports = questions;