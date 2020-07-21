//isInside
function isInside(array, ele) {
    let element = array.indexOf("ele");
    if (element <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isInside(['taylor', 'rome', 'adam'], 'ele'));

//reverseStr
function reverseStr(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverseStr("bootcamp"));

//luckySevens
function luckySevens(max) {
    let result = [];

    for (let i = 7; i >= max; i+=7) {

        if(num % 7 === 0) {
            result.push[i];
         }
    return result;
}
}
console.log(luckySevens(25)); // => [ 7, 14, 21 ]

//copyMachine
function copyMachine(element, num) {
    let result = [];
    for(let i = 0; i < num; i++) {
        result.push(element);
     }
    return result;
}
console.log(copyMachine('candy', 2));

//everyOtherWord
function everyOtherWord(sentence) {
    let result = [];
    let splitSentence = sentence.split(" "); //makes an array for every word
    for (let i = 0; i < splitSentence.length; i++) {
        if(splitSentence[i] % 2 === 0) {
            result.push(splitSentence);
        }
    }
    return result;
}
everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]

//word Yeller
function wordYeller(sentence) {
    let removeExclamation = sent.split("!").join("");
    let newSentence = removeExclamation.split(" ");
    let finalSentence = newSentence.join("! ");
    return finalSentence;
}
let sent = "Stop it now! Please, wont you stop?";
console.log(wordYeller(sent));

//arraySubstring
function arraySubstring(words, str) {
    let newString = words.join(" ");
    let newArray = [];
    console.log(newString);
    for(let i = 0; i < words.length; i ++) {
        if(str === newString.substring(0, str.length)) {
            newArray.push(true);
        } else {
            newArray.push(false);
        }
    }
    return newArray;
}
console.log(arraySubstring(["hello", "history", "helix", "hellos"],"hel"));

//evenCaps
function evenCaps(sentence) {
    let result = [];
    let newSentence = sentence.split("");
    console.log(newSentence);
    for(let i = 0; i < newSentence.length; i++) {
        let capsLetter =  newSentence[i];
        if(newSentence.indexOf(capsLetter) % 2 === 0) {
            result.push(capsLetter.toUpperCase());
        }
    }
    result.join(" ");
}
console.log(evenCaps("Tom got a small piece of pie"));