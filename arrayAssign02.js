const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log("*******************step 1**********************");

let length = arrayNumbers.length;
console.log(`the length of the array is ${length}`);

console.log("*******************step 2**********************");

console.log(`the first element of the array is ${arrayNumbers[0]}`);

let index=arrayNumbers.length-1;

console.log(
  `the last element of the array is ${arrayNumbers[index]}`
);

console.log("*******************step 3**********************");

let third = arrayNumbers.length-3;
console.log(`the third last element is ${arrayNumbers[third]}`);

console.log("*******************step 4**********************");

console.log(`even numbers are.......`)
let result=" ";
for (const even of arrayNumbers) 
{
    if(even%2==0)
  
{

    console.log(even)
}
}  



console.log("*******************step 5**********************");

console.log(`odd numbers are.......`)
for (const odd of arrayNumbers) 
{
    if(odd%2==1)

{

    console.log(odd)
}
}  



console.log("*******************step 6**********************");

let sumOfEve=0;

for (const sum in arrayNumbers) {
    if(sum%2==0)
    {
        sumOfEve=sumOfEve+arrayNumbers[sum];
    }
}
    console.log(`the sum of even positioned element is :${sumOfEve}`);

    console.log("*******************step 7**********************");

    let oddsum=0;

    for (const odd in arrayNumbers) {

        if (odd%2==1) {

            oddsum=oddsum+arrayNumbers[odd]
        }
    }

    console.log(`the sum of odd positioned element is :${oddsum}`);

    
    console.log("*******************step 8**********************");

let sum=0;

for (const all of arrayNumbers) {

sum=sum+all;
    
}

console.log(`the sum of all values in the array is:${sum}`)

console.log("*******************step 9**********************");

for (const multiple of arrayNumbers)
 {

    if(multiple%5==0)
    {
        console.log(`the multiple of 5 values are:${multiple}`);
    }
    

    }

    console.log("*******************step 10**********************");


    var avalile=arrayNumbers.includes(115);

    console.log(`is 115 avilable or not:${avalile}`);

    console.log("*******************step 11**********************");

    var aval=arrayNumbers.includes(23);

    console.log(`is 23 available or not:${aval}`);

    console.log("*******************step 12**********************");

    arrayNumbers.splice(3,0,55,66);

    console.log(`after insert array is:${arrayNumbers}`)

    console.log("*******************step 13**********************");

    var del=arrayNumbers.splice(4,3);
    console.log(`after deleting 3 element from 4 index array is:${arrayNumbers}`)