const person = {
    name: "sam",
    age : 20
}

class Person {
    constructor(name,age) {
        this.name= name
        this.age = age
    }
    greeting(){
        console.log(`my name is ${this.age} and ${this.name}` )
    }
}

module.exports = Person;