//isInside
function isInside(array, ele) {
    let element = isInside.indexOf("ele")
    if (element <= 0) {
        return true;
    } else {
        return false;
    }
}
isInside(['taylor', 'rome', 'adam'], 'ele');

//reverseStr
function reverseStr(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
reverseStr('bootcamp');

//luckySevens
function luckySevens(max) {
    let result = [];

    for (let i = 7; i >= max; i+=7) {

        if(num % 7 === 0) {
            result.push(i)
         }
    return result;
}
luckySevens(25); // => [ 7, 14, 21 ]

//copyMachine
function copyMachine(element, num) {
    let result = [];
    for(let i = 0; i < num; i++) {
        result.push(element);
     }
    return result;
}
copyMachine('candy', 2)
copyMachine('bread', 4)
copyMachine(11, 6)

//everyOtherWord
function everyOtherWord(sentence) {
    let result [];
    let splitSentence = sentence.splt(" "); //makes an array for every word
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
    let splitSentence = sent.split(" ");
    for(let i = 0; i < splitSentence.length; i++) {
        if()
    }
}

let sent = "Stop it now! Please, wont you stop?";
let yelledWords = wordYeller(sent);
yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true