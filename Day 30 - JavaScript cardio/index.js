// CHALLENGE 1: Reverse a string.
function reverseString(str){
    // METHOD 1:

    return str.split("").reverse().join("");
    
    // METHOD 2:
    
    // let revString = '';
    // for(let i = str.length - 1; i >= 0; i--){
    //     revString = revString + str[i];
    // }
    // return revString;

    // METHOD 3:

    // let revString = '';
    // for(let i = 0; i <= str.length - 1; i++) {
    //     revString = str[i] + revString;
    // }
    // return revString;

    // METHOD 4:

    // let revString = '';
    // for(let char of str) {
    //     revString = char + revString;
    // }
    // return revString;

    // METHOD 5:

    // let revString = "";
    // str.split("").forEach(char => revString = char + revString);
    // return revString;

    // METHOD 6:

    // return str.split("").reduce((revString, char) => char + revString, "");
}

// CHALLENGE 2: Validate a palindrome.
function isPalindrome(str){
    // METHOD 1:

    const getPalindrome = str.split("").reverse().join("");
    return getPalindrome == str;
}

// CHALLENGE 3: Reverse an integer.
function reverseInt(int){
    return parseInt(int.toString().split("").reverse().join("")) * Math.sign(int);
}

// CHALLENGE 4: Capitalize letters.
function capitalizeLetters(str){
    // METHOD 1:

    // const strArray = str.toLowerCase().split(" ");
    // for(let i = 0; i < strArray.length; i++) {
    //     strArray[i] = strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
    // }
    // return strArray.join(" ");

    // METHOD 2:

    return str.toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(" ");

    // METHOD 3:

    // return str.replace(/\b[a-z]/gi, char => {
    //     return char.toUpperCase();
    // })
}

// CHALLENGE 5: Max Characters in a string. ERROR(??)
function maxCharacter(str) {
    const charMap = {};
    let maxNumber = 0;
    let maxChar = "";

    str.split("").forEach(function(char) {
        if(charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });

    for(let char in charMap){
        if(charMap[char] > maxNumber){
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

// // CHALLENGE 6: Fizzbuzz
function fizzbuzz(){
    for(let i = 1; i <= 100; i++){
        if(i % 15 === 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i);
        }
    }
}

// CHALLENGE 7: Longest word. If theres only one, return as a string, otherwise, return an array of the words.
function longestWord(sen){
    // Turn the sentence into lower case letters and use RegEx(regular expression) to get rid of the ",", reading only letters ranging from a-z and numbers 0-9.
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    // Sort by length
    const sorted = wordArr.sort((a,b) => b.length - a.length);

    // If multiple words, put into an array.
    const longestWordArr = sorted.filter(word =>{
        return word.length === sorted[0].length;
    })

    // If theres only one longest word, return a string
    if(longestWordArr.length === 1) {
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }
}

// CHALLENGE 8: Chunking an array - Split an array into chunked arrays of specified length.
function chunkArray(array, len) {
    // METHOD 1:

    // Initialize an empty array.
    const chunkedArray = [];
    // Index
    let i = 0;

    while( i < array.length) {
        chunkedArray.push(array.slice(i, i + len));
        i += 2;
    }
    return chunkedArray;

    // METHOD 2 (way more complicated...):

    // const chunkedArray = [];

    // array.forEach(val => {
    //     const last = chunkedArray[chunkedArray.length - 1];

    //     if(!last || last.length === len) {
    //         chunkedArray.push([val]);
    //     } else {
    //         last.push(val)
    //     }
    // })

    // return chunkedArray;
}
// CHALLENGE 9: Flatten array. Take an array of arrays and flatten them into a single array.
function flattenArray(array){
    // METHOD 1:
    // return array.reduce((a,b) => a.concat(b));

    // METHOD 2:
    // return [].concat.apply([], array);

    // METHOD 3:
    return [].concat(...array);
}

// CHALLENGE 10: Anagrams - Return true if anagram and false if not.
function isAnagram(str1, str2){
    // Returns true if they match, returns false if they dont.
    return formatStr(str1) === formatStr(str2);
}
function formatStr(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// CHALLENGE 11: Letter changes - Change every letter of the string to the one that follows it and capitalize the vowels.
function letterChange(str) {
    let newString = str.toLowerCase().replace(/[a-z]/gi, char =>{
        if(char === "z" || char === "Z") {
            return "a"
        } else {
            return String.fromCharCode(char.charCodeAt() + 1)
        }
    });

    newString = newString.replace(/a|e|i|o|u/gi, vowel =>{
        return vowel.toUpperCase();
    })
    return newString;
}
const output =  letterChange("Hello There");
console.log(output);