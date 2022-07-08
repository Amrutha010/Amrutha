let person ={
    fullName: function(){
        return this.firstName+" "+this.lastName;

    }
}
let person1={
    firstName:"Mary",
    lastName:"Doe"
}
let person2={
    firstName:"John",
    lastName:"Dere"
}
person.fullName.call(person1);
