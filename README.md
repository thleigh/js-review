# JavaScript Review

**This is my review of Javascript.**

## Examples of Data Types
```javascript
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
``` 

## Examples of Functions
```javascript
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
```

## DOM Manipulation

```javascript
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
```

### More DOM Manipulation

```javascript
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
    })̌
```

## Understanding Prmoises
A promise 3 states:

1. Pending: You aren't sure what you'll receive.
2. Fulfilled: You request is fulfilled and you get what you want.
3. Rejected: Your request is rejected and you don't get what you want.

```javascript
    var boolean = false;

    var willIGetIt = new Promise(
        function (resolve, reject) {
            if (isItTrue) {
                var element = {
                    name: 'Tanner',
                    color: 'yellow'
                };
                resolve(element); // fulfilled
            } else {
                var reason = new Error('your request is fulfilled');
                reject(reason); // reject
            }

        }
    );
```

## API's
API: a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.

```javascript
    fetch(requestURL)
    .then(function(responseData){
        // Fetch will package the response into an object with some methods that allow us to do some useful things with the response.
        // Use the .json() method to return the data in JSON format
            return responseData.json();
    })
    .then(function(jsonData){
        // whatever we return in the first .then promise will be passed into this callback function
        // do some stuff with the jsonData here
    })
    .catch(function(error){
        // any errors encountered in the request or the .then promises above will be passed into this callback
        console.log("Oh no, there's been an error!", error);
    })
```
## Object Oriented Programming: Prototypal Inheritance

```javascript
    const tanner = {
        name: 'Tanner',
        goodBoy: true,
        gender: 'boy',
        favoriteSport: 'soccer'
    }

    const rome = {
        name: 'Rome',
        goodBoy: true,
        job: 'GA instructor'
    }

    rome.__proto__ = tanner;

    console.log(rome.favoriteSport);
    //will output rome's favorite sport as soccer.
```

## Constructor Functions

```javascript
    //Constructor functions are always in caps.
    function Spurs(name, number, position) {
        this.name = name;
        this.number = number;
        this.position = position;
    }

    let son = new Spurs('Heung-min Son', '7', 'Winger');
    let kane = new Spurs('Harry Kane', '10', 'Striker');

    console.log(son);
    console.log(kane);
```

## Class

```javascript
    class GithubProfile {
        constructor(username, name, url) {
            this.username = username;
            this.name = name;
            this.url = url;
        }
        intro() {
            console.log(`My name is ${this.name} and my username is ${this.username}.`)
            }
        }
        fetch('https://api.github.com/users/thleigh')
        .then(response => {
        return response.json()
        })
        .then(data => {
            console.log(data);
            let githubURL = data.url;
            let githubUsername = data.login;
            let githubName = data.name;

            let tanner = new GithubProfile(githubUsername, githubName, githubURL);
            console.log(tanner);

            tanner.intro();
        });
```