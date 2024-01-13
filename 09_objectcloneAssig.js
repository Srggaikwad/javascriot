
const banksbi=
{
bankname:"bank of india",
brancode:"BKID000749",
branchmanager:"mr suraj gaikwad",
acc_bal:100000000
}
console.log("************Step 1******************");
console.log(banksbi);
const bankLocation=
{
street:"vadegaon naka",
city:"sangola",
pin:413307
}
console.log("************Step 2******************");
console.log(bankLocation);

let clone=Object.assign(banksbi,bankLocation)

console.log("************Step 3******************");


console.log(clone);

console.log("************Step 4******************");


const rateOfinterest=
{
    homeLoaninterest:8,
    personalLoanInterest:10,
    dueInterest:7
}

console.log(rateOfinterest)

console.log("************Step 5******************");

let merge=Object.assign({},banksbi,bankLocation,rateOfinterest)

console.log(JSON.stringify(merge))

console.log("************Step 6******************");


for (const key in merge) {

    const element=merge[key];
console.log(`key =>${key},value =>${element}`)

}

    