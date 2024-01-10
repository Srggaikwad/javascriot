
const str="I am UI developer";

const vowel="aeiou";
let count=0;
for (const element of str) 
{
    console.log(element);

  if(vowel.includes(element.toLowerCase())) 
  {
    count++;
    
  }  
}
  console.log(count);

  
let friends=["suraj","sunil","sumit"];

let result=friends.reverse("-");

console.log(result);


const word="developer UI and backend";

const arrayOfwords=word.split(" ");

console.log(arrayOfwords.length);

let suraj=arrayOfwords.reverse("");
console.log(suraj);

 



