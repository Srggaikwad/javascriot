function maleMarriageEligibility(gender, age, boyName) {
  var male;
  var age;
  var result =
    gender == "male" && age >= 21
      ? `hey ${boyName} you are eligible for marriage`
      : `not eligible for marriage`;
  console.log(result);
}

maleMarriageEligibility("male", 25, "billgates");
maleMarriageEligibility("male", 17, "stew jobs");

console.log("**************************************************************");


function girlMarriageEligibility(gender, age, girlName) {
    var girl;
    var age;
    var result =
      gender == "girl" && age >= 18
        ? `hey ${girlName} you are eligible for marriage`
        : `not eligible for marriage`;
    console.log(result);
  }
  
  girlMarriageEligibility("girl", 16, "jenifar");
  girlMarriageEligibility("girl", 22, "vaishnavi");