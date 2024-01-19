

class employee
{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company)
    {
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
    getdata()
    {
     console.log(`Employee id=>${this.emp_id},Employee Name=>${this.emp_name},Employee Department=>${this.emp_dept},Employee csalary=>${this.emp_salary},Employee company=>${this.emp_company}`);

    }
}

const emp_anil=new employee(22,"Anil","IT",5000,"TCS");
const emp_radh=new employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new employee(55,"Rishi","finance",47000,"TCS");
const emp_sonali=new employee(66,"sonali","finance",45000,"Infy");
const emp_monali=new employee(77,"monali","IT",40000,"wipro");
const emp_vinayak=new employee(88,"vinayak","IT",75000,"TCS");
const emp_mahesh=new employee(99,"mahesh","HR",85000,"Infy");

const allemployee=[emp_anil,emp_radh,emp_rishi,emp_sonali,emp_monali,emp_vinayak,emp_mahesh]


console.log("*************************Step 1********************")
for (const emp of allemployee) {

    if(emp.emp_company=="TCS")
    {
        console.log(`the employee working in tcs is ${emp.emp_name}`)
    }
}

console.log("*************************Step 2********************")

for (const emp of allemployee) {
    if(emp.emp_dept=="finance")

    {
        console.log(`the ${emp.emp_dept} department employee is ${emp.emp_name}`)
    }
    
}

console.log("*************************Step 3********************")

for (const emp of allemployee) {
    if(emp.emp_name.startsWith('R'))
    {
        emp.getdata();
    }
    
}

console.log("*************************Step 4********************")

for (const emp of allemployee) {

    if(emp.emp_salary>75000)
    {
        console.log(`the employe name is ${emp.emp_name} and employee company is ${emp.emp_company} and its salary is ${emp.emp_salary}`)
    }
    
}





console.log("*************************Step 5********************")

for (const emp of allemployee) {
    if(emp.emp_salary>=50000 && emp.emp_dept=="IT")
    {
        emp.getdata();
    }
    
}



console.log("*************************Step 6********************")

for (const emp of allemployee) {
    if(emp.emp_company=="Infy")
    {
        emp.getdata();
    }
    
}