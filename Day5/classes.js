// __proto__

const user = {
    name: "Gufran",
    email: "gufran@gmail.com",
    age: 25,
    address: "Verma chowk, kutani road",
    city: "Panipat"
}

const engineere = {
    role: "Full Stack Developer",
    company: "AdvantAI",
    salary: 100000
    // __proto__: user // one of the way to add functionality of other object
}

engineere.__proto__ = user;

console.log(engineere); //engineere have the access of user object also we can aecss user data also using engineere object


// Class in Javascript is syntactical sugar for prototypal inheritence
// class in javascript is a blueprint of an object is similar to other programming language, but there is limititation as compared to other language
// Inheritence, Encapsulation, Polymorphism, Abstraction main pillars of OOP's

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }   
    walk(){
        console.log(`${this.name} is walking`);
    } 
}

class Employee extends Person {
    constructor(name, age, role, company, salary) {
        super(name, age);
        this.role = role;
        this.company = company;
        this.salary = salary;
    }
    work(){
        console.log(`${this.name} is working`);
    }
}

class Manager extends Employee {
    constructor(name, age, role, company, salary, department) {
        super(name, age, role, company, salary);
        this.department = department;
    }
    
}

const manager = new Manager("Gufran", 25, "Full Stack Developer", "AdvantAI", 100000, "Tech");
console.log(manager);


