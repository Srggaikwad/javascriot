

function reverseString(string)
{

    let char=" ";
    for(let i=string.length-1; i>=0; i--)
    {
 
      
        char=char+string.charAt(i);
    }
    if(char!==" ")
    {
    console.log(char);
    }

    
  
}

reverseString("Hard work always pays back");
reverseString("Soon i will be angular it champ");