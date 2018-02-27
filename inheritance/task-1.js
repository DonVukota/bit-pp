

function Person(name,surname,salary) {
    this.name=name;
    this.surname=surname;
    this.salary=salary;

}

function Employee(name, surname, specialization, salary) {
    Person.call(this, name, surname, salary);
    this.specialization = specialization;
}
Employee.prototype.getSpecialization = function () {
    return this.specialization
}


function Manager(name, surname, department, salary) {

    this.name = name;
    this.surname = surname;
    this.department = department;
    this.salary = salary;
}

Manager.prototype.getDepartment = function () {
    return this.department
}


function changeDepartment(newDep) {
    this.department = newDep
}


Manager.prototype.getDepartment=function(){
    return newDep
}