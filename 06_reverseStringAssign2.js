
function reverse(str)
{
console.log(`the given string are:${str}`)

let reverse=" ";
for(let i=str.length-1;i>=0;i--)
{
    let char=str.charAt(i)
    if(char !=" ")
    {
        reverse=char+reverse;
    }
}
console.log(reverse)
}


reverse("Hard work always pays back");
reverse("soon i will be React IT champ")