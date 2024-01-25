
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


const arrayEmps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monali,emp_vinayak,emp_mahesh]

console.log("*******step 1***********")
const result=arrayEmps.filter((element)=>{
  return element.emp_company=="wipro";
}).forEach((element)=>{

    console.log(element)
})

console.log("*******step 2***********")

const emp=arrayEmps.filter((element)=>{

return element.emp_dept=="IT" || element.emp_dept=="HR"
}).forEach((element)=>{
    console.log(element)
})

console.log("*******step 3***********")

const id=arrayEmps.filter((element)=>{
 
    return element.emp_id>50;
}).forEach((element)=>{
    console.log(element)
})

console.log("*******step 4***********")

const start=arrayEmps.filter((element)=>{

return (element.emp_name.startsWith("A") || element.emp_name.startsWith("v") || element.emp_name.startsWith("m"));
}).forEach((element)=>{
    console.log(element)
})


console.log("*******step 5***********")

arrayEmps.filter((element)=>{

console.log(element.emp_salary);

})




