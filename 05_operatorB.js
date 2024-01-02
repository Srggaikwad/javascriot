

console.log("**********************step 1*************************");

function greatestNumber(num1,num2)
{
    if(num1>num2)
console.log(`the number ${num1} is greater than ${num2}  `);

else
console.log(`the number ${num2} is greater than ${num1}`);
}

greatestNumber(10,-10)

greatestNumber(800,899)



console.log("**********************step 2*************************");

function isEvenOrOddNum(num)
{

if(num%2==0)
{
console.log(`the number ${num} is even  `);
}

 else
 {
 console.log(`the number ${num} is odd`);
 }

}

isEvenOrOddNum(29)
isEvenOrOddNum(44)
isEvenOrOddNum(0)
isEvenOrOddNum(101)


console.log("****************************step 3***************************");

function wordLength(str)
{
   var str;
   var len1=str.length;
    
   if(len1%2==0)
   {
    console.log(`the word length is ${len1} is even`)
   }
   else{
    console.log(`the word length is ${len1} is odd`)
   }
 
}

wordLength("javascript");
wordLength("developer");
wordLength("Google");