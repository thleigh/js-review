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

friends.forEach(friend => {
    printFriends(friend);
});

printFriends(friends);


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