// create object Employee
function Employee(id, name, surname, level, salary){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.level = level;
    this.salary = salary;
}

// array for storing the employees
var employees = [];

// this function returns the index in the array of the employee associated 
// to the ID inserted by the user, -1 if not found
function searchEmployee(id){
    for(var i = 0; i < employees.length; i++){
        if(id == employees[i].id){
            return i;
        }
    }
    return -1;
}

// this function removes from the array the employee associated to the
// ID inserted by the user
function deleteEmployee(id){
    for(var i = 0; i < employees.length; i++){
        if(id == employees[i].id){
            employees.splice(i, 1);
        }
    }
}

// this function inserts/update the employee in the array
function insertEmployee(id, name, surname, level, salary){
    
    // if any parameter but ID is left empty, do nothing
    if((name == "") || (surname == "") || (level == "") || (salary == "")){ 
    }
    
    // otherwise, if the employee is already stored in the array, update its attributes
    // with the values inserted by the user
    else if(searchEmployee(id) != -1){
        employees[searchEmployee(id)].name = name;
        employees[searchEmployee(id)].surname = surname;
        employees[searchEmployee(id)].level = level;
        employees[searchEmployee(id)].salary = salary;
    } 
    
    // otherwise...
    else{
        
        // ...if the user didn't specify an ID, automatically assign
        // the next maximum ID
         if(id == ""){
            id = parseInt(maxID(employees)) + parseInt(1);
        }
        // create a new Employee object, and put it into the array
        var newEmployee = new Employee(id, name, surname, level, salary);
        employees.push(newEmployee);
    }
}

// find the maximum ID among the employees stored in the array
function maxID(){
    var res = 0;
    for(var i = 0; i < employees.length; i++){
        if(employees[i].id > res){
            res = employees[i].id;
        }
    }
    return res;
}

// export the functions and variables to be made public
exports.insertEmployee = insertEmployee;
exports.searchEmployee = searchEmployee;
exports.deleteEmployee = deleteEmployee;
exports.employees = employees;