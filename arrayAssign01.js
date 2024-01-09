console.log("******************step 1*************************");
const fruits_seasonal=["Banana","orange","apple","mango","water melon"];

console.log(`the first fruit is:${fruits_seasonal[0]}`);

 let last=fruits_seasonal.length-1;

 console.log(`the first fruit is:${fruits_seasonal[last]}`);

 console.log("******************step 2*************************");


 const fruits=["Banana","orange","apple","mango","water melon"];

 fruits.unshift("papaya")

 console.log(`after adding array are:${fruits}`);

 
 console.log("******************step 3*************************");

 const third=["Banana","orange","apple","mango","water melon"];

 third.splice(3,1)

 console.log(third);

 
 console.log("******************step 4*************************");

 const fourth=["Banana","orange","apple","mango","water melon"];

 fourth.push("pineapple");

 console.log(fourth);

 console.log('***********************step 5**********************');

 const five=["Banana","orange","apple","mango","water melon"];

 five.splice(4,0,"Dragon fruit");

 console.log(five);

 console.log('***********************step 6**********************');

 const six=["Banana","orange","apple","mango","water melon"];

 six.splice(1,1,"kiwi");

 console.log(six);

 console.log('***********************step 7**********************');

 const seven=["Banana","orange","apple","mango","water melon"];

 let result=seven.slice(0,4)
console.log(result);

console.log('***********************step 8**********************');

const eight=["Banana","orange","apple","mango","water melon"];

for(let i=eight.length-1;i>=2;i--)
{
   console.log(eight[i]);
}



console.log("suraj")