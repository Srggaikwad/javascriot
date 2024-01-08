console.log("*************step 1********************");
function vowelcount(str)
{
 let count=0;
 let char;
 for(let i=0;i<=str.length-1;i++)
 {
    char=str.charAt(i);
    if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u' ||char=="I")

    {
    count=count+1;
    }
 }

 console.log(`the total vowel count in the line are ${count}`)
}

vowelcount("i am very good IT Developer")
vowelcount("i love you")

console.log("*************step 2********************");

function cube()
{
    let cube=0;
    for(let i=1;i<6;i++)
    {
     
        cube=cube+i*i*i;
    }
    console.log("the cube of number 1 to 5 is",cube);
}

cube();

console.log("*************step 3********************");

function oddPositionedChars(str)
{
   
    for(let i=0;i<str.length;i++)
    {
        let char=str.charAt(i)
        if(i%2==0 && char!==" ")
        {
            console.log(str.charAt(i));

        }
    
    }
}

oddPositionedChars('Hard work always pays back');