
function squareOfWordLenth(str) {
  var str;
  var len = str.length;

  var result = str.length * str.length;

  console.log(
    `the lenght of string ${str} is ${len} and its square is:${result}`
  );
}

squareOfWordLenth("javascript");
squareOfWordLenth("google chrome");
squareOfWordLenth("Developer smart");

console.log("**********************************************************")
function noarg()
{
    str="i am angular developer";

    var length=str.length;
   

   var result=str.split(" ");
   var len2=result.length;

   console.log(`the total character divide by total words is:${length/len2}`);

   console.log(`the total character multipe by total words is:${length*len2}`);

 
console.log("************************************************************");

}

noarg();