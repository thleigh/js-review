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