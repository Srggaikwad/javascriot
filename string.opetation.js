 
var suraj="sangola colleger sangola";

var result=suraj.charAt(12);

console.log(`the character available at 12 position is ${result}`);

var first="suraj";

var last="gaikwad";

var result=first.concat(last);

console.log(`the concatination of two strings are ${result}`);


var name="suraj";

var result=name.toUpperCase();
console.log(`the name is uppercase is ${result}`);

var name="suraj gaikwad";

var result=name.indexOf("gaikwad");
console.log(`index of name is ${result}`);


var name="   suraj gaikwad   ";

var result=name.trim();
console.log(`after trim "${result}"`);

var name="suraj rajram gaikwad";

var result=name.lastIndexOf("gaikwad");
console.log(`the lastindex of ${result}`);


var name='suraj gaikwad';

var result=name.replace("gaikwad","bhosale");

console.log(`after replace name is ${result}`);

var num=15;

console.log("the type of num is:",typeof(num)) 

var result=num.toString();

console.log("the type of num is:",typeof(result))


var name="suraj rajaram gaikwad";

var result=name.includes("gaikwad");

console.log(`name include or not: ${result}`);

var name="suraj rajram gaikwd";

var result=name.slice(0,50);

console.log(`slice are ${result}`);

var name="suraj suraj suraj suraj ";

var result=name.match(/raj/)

console.log(`match is ${result}`);

var str="1,2,3,4,5,6";

var result=str.split(",");
console.log(`after split ${result}`);




