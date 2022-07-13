class person {
    constructor(name){
        this.name=name;
    }

introduce(){
    console.log(`Hello,my name is ${this.name}`);
}
}
const p1 = new person ("Amrutha");
p1.introduce();