console.log("*******************Step 1**************************");

function ifelse(num1, num2, num3, num4) {
  var num = num1,
    num2,
    num3,
    num4;
  if (num % 2 == 0) {
    console.log(`the given number ${num} is even`);
  } else {
    console.log(`the given number ${num} is odd`);
  }
}

ifelse(45);
ifelse(70);
ifelse(67);
ifelse(98);

console.log("*************************step 2*************************");

function ifelse(num1, num2, num3, num4) {
  var age;
  var num = num1,
    num2,
    num3,
    num4;

  if (age >= 18) {
    console.log(`your age is ${num} you are eligible for vote`);
  } else {
    console.log(`your age is ${num} you are not eligible for vote`);
  }
}

ifelse(18);
ifelse(20);
ifelse(17);
ifelse(40);

console.log("******************Step 3********************************");

function length(name) {
  var result = name.length;
  if (result > 10) {
    console.log(`the string contain ${result} character which is more than 10`);

  }

  else{
    console.log("not contain ");
  }
}

length("javascript-ES6");

console.log("********************Step 4*********************");

function start(name)
{
  var name;
  var result=name.startWith;
  if(result)
{
    console.log(result);
}
 
}
start("javascript language")
