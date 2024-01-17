
function factorialOfNum(num)
{
var result=
1;
    
 if(num==1 || num==0)
 {
   console.log("the factorial is 1")
 }

 else if(num<0 || num==undefined || num==null || isNaN(num))
 {
    console.log("invalid input");
 }
  

  else
  {
 for(let i=1;i<=num;i++)
 {
    result=result*i;
 }
 console.log(`the factorial of a number is: ${result}`)
    }
}



factorialOfNum(5)
factorialOfNum(3)
factorialOfNum(null)
factorialOfNum(8)
factorialOfNum(undefined)
factorialOfNum(9)
factorialOfNum(0)



