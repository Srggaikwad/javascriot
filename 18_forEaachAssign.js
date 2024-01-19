
console.log("************Step 1*****************")
const arrayNum=[1,-7,40,502,-77,91,0,108,89,-601];

arrayNum.forEach((currentValue,index)=>{
    
    console.log(`value=>${currentValue},index=>${index}`)
})


console.log("************Step 2*****************")

arrayNum.forEach((positive)=>{

if(positive>=0)
{
    console.log(`the postive element is ${positive}`)
}

})


console.log("************Step 3*****************")
let array=[];
arrayNum.forEach((negative)=>{

if(negative<0)
{
   array.push;
}
console.log(array)
})


console.log("************Step 4*****************")


arrayNum.forEach((even)=>{

if(even%2==0)
{
    console.log(`the even numbers are:${even}`)
}


})

console.log("************Step 5*****************")

let sum=0;

arrayNum.forEach((summ)=>{

    sum=summ+sum;
})
console.log(`the sum of the array element is :${sum}`)


console.log("************Step 6*****************")

arrayNum.forEach((currentValue,index)=>{

    if(index%2==0)
    {
        console.log(`the even index element is ${currentValue}`)
    }
})