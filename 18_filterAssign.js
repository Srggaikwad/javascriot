

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
}

const emp_anil=new employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new employee(33,"Radha","HR",74000,"wipro");
const emp_rishi=new employee(55,"Rishi","finance",47000,"TCS");
const emp_sonali=new employee(66,"sonali","finance",45000,"Infy");
const emp_monali=new employee(77,"monali","IT",40000,"wipro");
const emp_vinayak=new employee(88,"vinayak","IT",75000,"TCS");
const emp_mahesh=new employee(99,"mahesh","HR",85000,"Infy");


const allemployee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monali,emp_vinayak,emp_mahesh]




console.log("*************step 1***********************************")
const array=allemployee.filter((currentValue)=>{
  return currentValue.emp_company=="TCS"
});

array.forEach((element)=>{
  console.log(element)
})

console.log("*************step 2***********************************")

sum=0;
count=0;
allemployee.filter((element)=>{
  

    if(element.emp_company=="wipro")
    {
     sum= sum+element.emp_salary; 
     count++;
    }

})

let result=sum/count;
console.log(`the average salary of wipro employee is:${result}`)




console.log("*************step 3***********************************")


sum=0;
count=0;

allemployee.filter((element)=>{
  

    if(element.emp_company=="wipro" || element.emp_company=="Infy")
    {
     sum= sum+element.emp_salary; 
     count++;
    } 

})

let resultt=sum/count;
console.log(`the average salary of wipro and Infy
 employee is:${resultt}`)
