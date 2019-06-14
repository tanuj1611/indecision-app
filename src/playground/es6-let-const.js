var nameVar = "Tanuj";
var nameVar = "Tan";
console.log("nameVar", nameVar);

let nameLet = "Tanuj";
nameLet = "Tan";
console.log("nameLet", nameLet);

const nameConst = "Tanuj";
console.log("nameConst", nameConst);

//Block-scoping

const fullName = "Tanuj Agarwal";
let firstName;// declared here cause it is used outside the if too

if(fullName){
    firstName=fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);