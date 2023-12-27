var sweety="sweety";
var cutie="cutie";

console.log("before initialization the value of sweety is",sweety);

console.log("before initialization the value of cutie is",cutie);

console.log("****************************************************")

var temp;

temp=sweety;
sweety=cutie;
cutie=temp;

console.log("after initialization the value of sweety is",sweety);

console.log("after initialization the value of cutie is",cutie);

console.log("***************************************************")

var first=100;
var secound=200;
var third=300;
var fourth;

console.log("the value of first before swap is:",first)
console.log("the value of secound before swap is:",secound)
console.log("the value of third before swap is:",third)

console.log("*****************************")
fourth=first;
first=secound;
secound=third;
third=fourth;
 
console.log("the value of first after swap is:",first)
console.log("the value of secound after swap is:",secound)
console.log("the value of third after  swap is:",third)
