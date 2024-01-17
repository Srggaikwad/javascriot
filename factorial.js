

let factorial=function(num)
{
    if (num==0 || num==1) 
    {
        return 1;
    }
    if(num<0)
    {
        return "invalid input";
    }

    let result=1;
    for(let i=1;i<=num;i++)
    {
    result=result*i;
}
console.log(`the factorial of number ${num} is ${result}`)
}
factorial(5);