

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


const returnvalue=allemployee.filter((element)=>{

return element.emp_company=="TCS";
})


returnvalue.forEach((currentValue)=>{

    console.log(currentValue)
})


// write a program to find salary of employee whose salary is greate than 75000

const salary=allemployee.filter((currentValue)=>{

return currentValue.emp_salary>=75000;

});

salary.forEach((suraj
    
    )=>{
    console.log(suraj)
})