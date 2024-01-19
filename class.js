

function person(person_name,person_age,person_gender)
{
    this.name=person_name,
    this.age=person_age,
    this.gender=person_gender,

    this.greet=function()
    {
    return('hi' + ''+this.name);
    }
}

const person1=new person('john',23,'male');

console.log(person1.name,person1.age)


class vehicle
{
    constructor(company,name,type,capacity,color)
    {
        this.company=company;
        this.name=name;
        this.type=type;
        this.capacity=capacity;
        this.color=color;
    }
}

const vehichle1=new vehicle("maruthi","swift","MUV",5,"white");

console.log(vehichle1.company,)