// CHALLENGE 1: Reverse a string.
// function reverseString(str){
    // METHOD 1:

    // return str.split("").reverse().join("");
    
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
// }

// CHALLENGE 2: Validate a palindrome.
// function isPalindrome(str){
    // METHOD 1:

    // const getPalindrome = str.split("").reverse().join("");
    // return getPalindrome == str;
// }

// CHALLENGE 3: Reverse an integer.
// function reverseInt(int){
//     return parseInt(int.toString().split("").reverse().join("")) * Math.sign(int);
// }

// CHALLENGE 4: Capitalize letters.
// function capitalizeLetters(str){
    // METHOD 1:

    // const strArray = str.toLowerCase().split(" ");
    // for(let i = 0; i < strArray.length; i++) {
    //     strArray[i] = strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
    // }
    // return strArray.join(" ");

    // METHOD 2:

    // return str.toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(" ");

    // METHOD 3:

    // return str.replace(/\b[a-z]/gi, char => {
    //     return char.toUpperCase();
    // })
// }

// CHALLENGE 5: Max Characters in a string. ERROR(??)
// function maxCharacter(str) {
//     const charMap = {};
//     let maxNumber = 0;
//     let maxChar = "";

//     str.split("").forEach(function(char) {
//         if(charMap[char]){
//             charMap[char]++;
//         } else {
//             charMap[char] = 1;
//         }
//     });

//     for(let char in charMap){
//         if(charMap[char] > maxNumber){
//             maxNum = charMap[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }

// // CHALLENGE 6: Fizzbuzz
// function fizzbuzz(){
//     for(let i = 1; i <= 100; i++){
//         if(i % 15 === 0){
//             console.log("FizzBuzz");
//         }
//         else if(i % 3 === 0) {
//             console.log("Fizz")
//         } else if (i % 5 === 0) {
//             console.log("Buzz")
//         } else {
//             console.log(i);
//         }
//     }
// }

// CHALLENGE 7:


const output = fizzbuzz();
console.log(output);