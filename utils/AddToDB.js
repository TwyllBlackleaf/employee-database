const addToDB = {
    // Add a department: name
    department: `INSERT INTO departments (name) VALUES (?)`,

    // Add a role: name, salary, department
    role: `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`,

    // Add an employee: first name, last name, role, manager
    addEmployee: `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`,

    // Add an employee with no manager
    addNoManager: `INSERT INTO employees (first_name, last_name, role_id) VALUES (?,?,?)`,

    // Update an employee role: select employee and new role
    updateEmployee: `UPDATE employees SET role_id = ? WHERE id = ?`
}

module.exports = addToDB;