const square = function (x){
    return x*x;
};

// const squareArrow = (x) => {
//     return x*x;
// };

const squareArrow = (x) => x*x;


console.log(squareArrow(8));


const firstname = (fullname) => {
    return fullname.split(" ")[0];
};
console.log(firstname("Mike Smith"));

const firstnameagain = (fullname) => fullname.split(" ")[0];

console.log(firstnameagain("baba ba"));