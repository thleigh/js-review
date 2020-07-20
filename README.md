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

