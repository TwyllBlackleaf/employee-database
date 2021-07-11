class QueryDB {
    constructor() {}

    // View all departments: name and id
    departments() {
        return `SELECT * FROM departments`;
    }

    // View all roles: job title, role id, department, salary
    roles() {
        return `SELECT roles.title, roles.salary, departments.name AS department
    FROM roles
    LEFT JOIN departments
    ON roles.department_id = departments.id`;
    }

    // View all employees: id, first name, last name, job title, salary, department, managers
    employees() {
        return `SELECT e.id, e.first_name, e.last_name, r.title, r.salary, d.name 
    AS department, 
    CONCAT(m.first_name, " ", m.last_name)
    AS manager
    FROM employees e
    LEFT JOIN roles r
    ON e.role_id = r.id
    LEFT JOIN departments d
    ON r.department_id = d.id
    LEFT JOIN employees m
    ON e.manager_id = m.id`;
    }

    // Get all roles for inquirer

    // Get all managers for inquirer

    // Get all departments for inquirer

    // Get all employees for inquirer
}