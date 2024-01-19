
console.log("**************Step 1*******************")
const simpleArrow=()=>
{
    console.log(`Good Morning,Today is Wednesday`)

}

simpleArrow();


console.log("**************Step 2*******************")

const multi=(num1,num2,num3=1)=>

{
    let result=num1*num2*num3;
    console.log(`the multiplication of three number is ${result}`);

}

multi(5,5,2)
multi(10,4)



console.log("**************Step 3*******************")

var addition=(num1,num2,num3,num4,num5)=>
{
    return num1 + num2 + num3 + num4 + num5;

}

var result=addition(100,100,200,349,756);
var resultt=addition(" i am" , " learning" , " ES6" , " feature" , " in depth");
console.log(`the addition of five number is:${result}`)
console.log(`the addition of five number is:${resultt}`)