
class employee{
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
        console.log(`the employee id is:${this.emp_id},employee name is ${this.emp_name},employee dept is ${this.emp_dept},employee salary is ${this.emp_salary},employee company is ${this.emp_company}`);
    }
}
const emp_anil=new employee(22,"Anil","IT",50000,"TCS");
const emp_radh=new employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new employee(55,"Rishi","finance",47000,"TCS");
const emp_sonali=new employee(66,"sonali","finance",45000,"Infy");
const emp_monali=new employee(77,"monali","IT",40000,"wipro");
const emp_vinayak=new employee(88,"vinayak","IT",75000,"TCS");
const emp_mahesh=new employee(99,"mahesh","HR",85000,"Infy");


const allemployee=[emp_anil,emp_radh,emp_rishi,emp_sonali,emp_monali,emp_vinayak,emp_mahesh]

console.log("*************step 1*****************")

allemployee.forEach((employee)=>{

if(employee.emp_company=="TCS")
{
    console.log(`the name is ${employee.emp_name} and company is ${employee.emp_company}`)
}

})

console.log("*************step 2*****************")

allemployee.forEach((value)=>{


if(value.emp_salary>=50000)
{
    value.getdata();
}


})


console.log("*************step 3*****************")


let add=0;
allemployee.forEach((sum)=>{

add=add+sum.emp_salary;
})
{
    console.log(`the sum of all employee salary is :${add}`)
}

console.log("*************step 4*****************")

let avg;
let addition=0;

allemployee.forEach((avarage)=>{

addition=addition+avarage.emp_salary;

})

avg=addition/allemployee.length;
console.log(avg)


console.log("*************step 5*****************")

allemployee.forEach((suraj)=>{

    if(suraj.emp_dept=="IT" || suraj.emp_dept=="HR" && suraj.emp_salary>=75000)
    {
        suraj.getdata();
    }



})