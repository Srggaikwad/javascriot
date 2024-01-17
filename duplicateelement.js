
console.log("******************Step 1*****************************")

console.log("removing duplicate element from array..................")

function getUnique(arr)
{

let uniqueArr=[];
for(let i of arr)
{
    if(uniqueArr.indexOf(i)==-1)
    {
        uniqueArr.push(i)
    }
}
console.log(uniqueArr)
}
const array=[11,3,4,11,4,7,3]

getUnique(array)