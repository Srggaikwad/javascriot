
console.log("***********step 1*******************")


const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19]

const empArray=[];

arrayNumbers.map((element)=>{


      element=element+10;
      {
    empArray.push(element)
}
})

console.log(empArray)



console.log("***********step 2*******************")

const array=[20,11,40,25,23,11,9,31,60,2,19]

const cube=array.map((element)=>{

return element*element*element;
})

console.log(`the cube of each element in  the array is:${cube}`)



console.log("***********step 3*******************")


const arrayy=[20,11,40,25,23,11,9,31,60,2,19]

const sumOFIndex=arrayy.map((currenValue,index)=>{

return currenValue+index;
})

console.log(`the sum of array element and its index value is:${sumOFIndex}`)
