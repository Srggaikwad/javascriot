
let person={
    firstname:"suraj",
    age:22,
    isMarried:false
}
//print the object
console.log(person)

//print only first name
console.log(person.firstname);

//add new property into the object
person.designation="berojgar";
console.log(person)


//to update the age
person.age=23;
console.log(person)


//to update the ismarried 
person.isMarried=true;
console.log(person)


//to print the data int0o the tabular form 
console.table(person)

delete person.designation;
console.table(person)

console.log("to create the empty object")

let address=
{

}

address.city="pune";

console.log(address)


let user={
    userName:"suraj",
    country:"Dubai",

   address:{
        city:"pune",
        street:"wakad",

        getAddress:function(){
          console.log(`complet address:${this.street},${this.city}`);
        }
    },
    show:function()
    {
        console.log("inside the show function")
    }

}

console.log(user)

user.show();

console.log(user.address.street)

user.address.flateNo=12;
console.log(user.address)

user.address.getAddress();

let add=
{
    skills:["C","CPP","javascript"]
}



add.skills.push("HTML");


console.log(add.skills)

add.skills.shift();
console.log(add.skills)