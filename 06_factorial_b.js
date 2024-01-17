

function factorialWordsCount(num)
{
  var resultt=1;
 var result=num.split(' ');

var numLength=result.length;



if(numLength==0 || numLength==1)
{
  console.log("the factrial is:1")
}
else if(numLength==null || numLength==" ")
{
  console.log("invalid input");
}
else{
  for(let i=1;i<=numLength;i++)
  {
    resultt=resultt*i;
  }
  console.log(`the factorial of the given  is:${resultt}`)
}
}

factorialWordsCount("revision in the mother of success")
factorialWordsCount("we never fail, we always learn, mind it")
factorialWordsCount("null")

// factorialWordsCount("")
factorialWordsCount("suraj rajram gaikwad")

