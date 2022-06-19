const employee = {
    name: 'alex', 
    streetAddress:'main street',
};
employee.name;
function updateEmployeeWithKeyAndValue(employee, name, streetAddress){
 return {...employee,...{[name]:streetAddress}}
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
employee[name] = streetAddress;
return employee;
}
function deleteFromEmployeeByKey(employee, name, streetAddress ){
   const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee
   
}
function destructivelyDeleteFromEmployeeByKey(employee, name, streetAddress) {
     delete employee.name;
     return employee
    
}