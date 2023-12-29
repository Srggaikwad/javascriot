console.log("*************step 1******************")
function suraj(){
    console.log("function with no argument")
}

suraj();

console.log("*************step 2******************")

function personaldetails(firstName,lastName,collegeName)
{
console.log("first name is:",firstName);
console.log("lastname name is:",lastName);
console.log("college name is:",collegeName);
}

personaldetails("suraj","Gaikwad","SMS");

console.log("*******************step 3**************")

function swapvalue(n1,n2)
{
  console.log("the value before swap is:","n1:",n1,"n2:",n2)
  var temp;
  temp=n1;
  n1=n2;
  n2=temp;
  console.log("The value after swap is:","n1:",n1,"n2:",n2);
}

swapvalue("virat","anushka");
swapvalue(1000,2000)


console.log("*******************step 4**************")

function addThreeValues(n1,n2,n3)
{
    var result;
    result=n1+n2+n3;
    console.log("addition is:",result)
}

addThreeValues(10.23,600,40)
addThreeValues("hello","Good","Morning")