


function interview(gradScore,hscScore,sscScore,candidateName)
{

if(gradScore>=70 && hscScore>=80 && sscScore>=90)
{
    console.log(`hello ${candidateName} you are eligible for interview`);
}
else{
    console.log(`hellow ${candidateName} you are not eligible for interview`);
}
}

interview(80,86,90,"suraj");
interview(70,65,65,"vaishnavi");
interview(60,79,88,"pooja");