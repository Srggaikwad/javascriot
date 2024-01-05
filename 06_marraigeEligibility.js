function marriage(gender, age)

{
    
  if (gender.includes("male") && age>=21) 
  {
    console.log(`your age is ${age} you are eligible for marriage`);
}
   else if(gender.includes("male") && age<21 )
   {
    console.log(`you are not eligible for marriage`);
  }

  else if (gender.includes("female") && age >= 18) 
  {
    console.log(`your age is ${age} you are eligible for marriage`);
}
   else if(gender.includes("female") && age<18 );
   {
    console.log(`you are not eligible for marriage`);
  }
  

 else
  {
    console.log("you have entered wrong data");
  }


}

marriage("male", 17);

marriage("male", 25);

marriage("female", 28);

marriage("female", 16);

marriage("other", 35);

marriage("other", 41);
