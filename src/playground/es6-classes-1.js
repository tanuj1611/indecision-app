
class Person{
    constructor(name="Anonymous", age=0){
        this.name=name;
        this.age=age;
    }

    getGreeting(){
        return `Hi. I am ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major; //!"abc"->true, !!"abc"->false; !undefined->true, !!undefined->false
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `Major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }
    getGreeting(){
        let greeting=super.getGreeting();
        if(this.homeLocation){
            greeting+=`I am from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me=new Traveler("baba",20,"HK");
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
// console.log(me.hasMajor());

const other=new Traveler();
console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());
// console.log(other.hasMajor());
