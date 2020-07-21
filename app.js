let name = "Tanner Leigh";
let age = 32;
let isCool = true;
let friends = ["Kevin", "Katie", "Chelsea", "Brandon", "Emily"];

let tottenhamHotspurs = {
    teamName: "Tottenham Hotspurs",
    yearFounded: 1882,
    manager: "Jose Mourinho",
    players: ["Harry Kane", "Heung-min Son", "Steven Bergwijn", "Lucas Moura", "Dele Alli", "Hugo Lloris", "Giovani Lo Celso", "Moussa Sissoko"],
    rivals: {
        northLondon: "Arsenal",
        championsLeague: "Ajax",
        premiereLeague: "Chelsea"
    },
    print: function() {
        console.log("Tanner's favorite player of the Tottenham Hotspur is" + this.players[1]);
    }
}
tottenhamHotspurs.print();

let tesla = {
    industry: "Electric Cars",
    ceo: "Elon Musk",
    yearFounded: 2003,
    foundingMembers: ["Elong Musk", "JB Straubel", "Martin Eberard"],
    stockTicker: "TSLA",
    vehicles: {
        vehicleOne: "Model S",
        vehicleTwo: "Model X",
        vehicleThree: "Model 3"
    },
    print: function() {
        console.log("The CEO of Tesla" + this.ceo)
    }
}


tesla.stockPrice = 1643.00;

console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(tesla);
console.log(tesla.vehicles.vehicleThree);
console.log(tesla["vehicles"]["vehicleThree"]);
tesla.print();

//forEach function review
function printFriends(array) {
    array.forEach(friend => {
        console.log(friend);
    });
};

// friends.forEach(function) {

// }

// friends.forEach(friend => {
//     printFriends(friend);
// });

// printFriends(friends);

//standard function
function addNumbers(num1, num2) {
    return num1 + num2;
};

//function expression
let multiplyNumbers = function (num1,num2) {
    return num1 * num2;
};

//arrow function
let subtractNumbers = (num1, num2) => {
    return num1 - num2;
};

//DOM
let container = document.querySelector(".container");

//create an element
let headerTwo = document.createElement("h2");
headerTwo.textContent = "My First JS Review";

container.appendChild(headerTwo);

//add a class to hearderTwo
//two ways to do this
headerTwo.classList.add("subtitle");
//and
headerTwo.setAttribute("class", "header-two"); 
//you can create two classes in one
headerTwo.classList.add("subtitle", "header-two");

//to remove attribute
headerTwo.classList.remove("header-two");

//add click eventListener
headerTwo.addEventListener("click", function() {
    headerTwo.textContent = "Tanner";
});

//make another element
const headerThree = document.createElement("h2");
headerThree.textContent = "Friends";
container.appendChild(headerThree);

const list = document.createElement("ul");
//iterate through my friends array
for (let i = 0; i < friends.length; i++) {
    let eachFriend= friends[i];

    //create a li
    let listItem = document.createElement("li");
    //add textContent to that li
    listItem.textContent = eachFriend; 
    //append that to a ul (unordered list)
    list.appendChild(listItem);
};

//create eventListener function to append to container
headerThree.addEventListener('click', function() {
    container.appendChild(list);
})

//frizzBuzz
//Write a function that does the following:
    //takes in an array
    //check each number in the array
    //if the number is divisible by 5 and 3 === fizzBuzz
    //if the number is divisble by 3 === fizz
    //if the number is divisible by 5 === buzz
//return an array

//for example:
//[3, 5, 15, 20, 9, 7]
//returns this: 
//['fizz', 'buzz', 'fizzbuzz', 'buzz', 'fizz', 7]

//I need to set up an empty array
//Iterate through the array thats going to be passed in
//check the remained of each element (using %)
//push the result of each element inside the result array
//return that result array

function fizzBuzz(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        console.log(num);

        if(num % 3 === 0 && num % 5 === 0) {
            result.push("FizzBuzz");
        } else if(num % 3 === 0) {
            result.push("Fizz");
        } else if (num % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(num)
        }
    }
    return result;
}
console.log(fizzBuzz([3, 5, 15, 20, 9, 7]));

