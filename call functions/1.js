// with the call() method, you can write a method that can be used on different objects
//example without call function
let person ={
    firstName: "john",
    lastName: "Doe",
    fullName: function(){
        return this.firstName+" "+this.lastName;

    }
}
person.fullName();