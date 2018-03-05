function Date(dateImput){}
function Person(name,surname,ID){
    this.name=name;
    this.surname=surname;
    this.ID=Math.round(math.random()*100000);
}

function Employee(name,surname,employeeID,salary){
    Person.call(this,name,surname);
    this.employeeID=employeeID;
    this.salary=salary;
}

function Professor(name,surname,employeeID,salary,officeNumber){
    employee.call(this.name,surname,employeeID,salary);
    this.officeNumber=officeNumber;
}

function Exam(subject,Professor,date,grade){
    this.subject=subject;
    this.professor=Professor;
    this.grade=grade;
    this.date=getDate(date);
}
function Student(name,surname,ID,indexNumber,status){
    Person.call(this,name,surname,ID);
    this.indexNumber=indexnumber;
    this.status=status;
    this.studentsListOfPassedExames=[];

}


function Date(dateImput){
    this.date=new Date(dateImput);
    this.dd=date.getDate();
    this.mm = date.getMonth() + 1;
    this.yy = date.getFullYear();
    return this.dd + "-" + this.mm + "-" + this.yy;
}