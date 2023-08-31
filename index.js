// Write your solution in this file!
const employee = {
    name: "John Smith",
    streetAddress: "123 main street"
};

// update value for the key; do not mutate
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]:value
    };
    
}

// update value for key; do mutate
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// delete key from employee; do not mutate
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key]; 
    console.log(newEmployee);
    return newEmployee;
}

// delete key from employee; do mutate
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

deleteFromEmployeeByKey();
destructivelyDeleteFromEmployeeByKey();