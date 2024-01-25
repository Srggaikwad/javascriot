

function palimdrome(str)
{

    const word=str.toLowerCase();
    const reversWord=word.split("").reverse().join("");
    return word==reversWord?true:false;
}

const suraj=palimdrome("dad")
console.log(suraj)