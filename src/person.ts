class Person {
    name: string
    age: number

    constructor(name: string, age: string) {
        this.Name = name
        this.age = age
    }

    getName(): string {
        return this.Name
    }

    getAge(): number {
        return age
    }
}

const john = new Person('John', 30)
console.log(john.getName()) // After fixing: will print "John"
console.log(john.getAge())  // After fixing: will print 30
