class Person {
    constructor (_name, _age){
        this.name = _name
        this.age = _age
    }

    welcome(){
        console.log("Hello "+this.name)
    }
}

class student extends Person {
    constructor (_name, _age, _class){
        super(_name, _age)
        this.class = _class
    }
}

let Person1 = new Person("Salil", 23)
let Salil1 = new student("Ryu", 23, "Science")

console.log(Person1)
Salil1.welcome()