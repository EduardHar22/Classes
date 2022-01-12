"use strict"


class Person {
    constructor(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
    }

    eat(str){
        if(typeof str === "string" && this.stomach.length < 9){
            this.stomach.push(str);
        }
        else    
           return  "sovac chem"
        
        return this.stomach
    };

    poop(){
        const pooped = this.stomach.splice()
        return pooped;
    };

    ToString(){
        return `${this.name}, ${this.age}`;
    };
};

class Baby extends Person {
    constructor(name, age, favoriteToy){
        super(name, age);
        this.favoriteToy = favoriteToy;
    }

    play(){
        return `Playing with ${this.favoriteToy}`
    };
};

const baby = new Baby("Edo", 20, "teddyBear")

const person = new Person("Edo", 20);

console.log(person.ToString())


console.log(baby.ToString())


