"use strict"

function Person(name, age,){
    this.name = name;
    this.age = age;
    this.stomach = [];
};

Person.prototype.eat = function(str){
        if(typeof str === "string" && this.stomach.length < 9){
            this.stomach.push(str);
        }
        else    
           return  "sovac chem"
        
        return this.stomach
};

Person.prototype.poop = function(){
    const pooped = this.stomach.splice()
    return pooped;
};

Person.prototype.ToString = function(){
    return `${this.name}, ${this.age}`;
};
const mard = new Person("Edo",20);
console.log(mard.eat("aaa"))


