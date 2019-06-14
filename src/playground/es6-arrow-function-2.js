//arguments object- no longer bound in arrow function
const abc = function(a, b){
    console.log(arguments); // this statement will console log all the arguments in function call
    return a+b;
};
console.log(abc(1, 2));

const abcd = (c, d) =>{
    // console.log(arguments); this statement is illegal with arrow functions
    return c+d;
};
console.log(abcd(5,6));


//this object- no longer bound in arrow function

const user = {
    name: "Tanuj",
    cities: ["HK","New Delhi","Kanpur"],
    printPlacesLived: function(){
        const that=this; // using this because in the next function it is not possible to use "this" in the next function in forEach as "this" is bound
        this.cities.forEach(function(city){
            console.log(that.name + " has lived in "+ city);
        });
    }
};

user.printPlacesLived();

const user1 = {
    name: "Tanuj",
    cities: ["HK","New Delhi","Kanpur"],
    printPlacesLived(){  // shortcut method in es6
        this.cities.forEach((city) => {
            console.log(this.name + " has lived in "+ city); // in this case "this" works as arrow function uses "this" of the place where it is referenced 
        });
    }
};

user1.printPlacesLived();

const user2 = {
    name: "Tanuj",
    cities: ["HK","New Delhi","Kanpur"],
    printPlacesLived(){  // shortcut method in es6
        return this.cities.map((city) => this.name + " has lived in "+ city ); // map lets modify every object of the array and store it in another array
    }
};
console.log(user2.printPlacesLived());

const multiplier = {
    numbers: [3, 5],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());