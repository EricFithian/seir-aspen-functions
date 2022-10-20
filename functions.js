// // Start by writing a function

// // function cars(arrOfCars) {
// //     console.log(arrOfCars);
// // }

// const myVar = function (arrOfCars) {
//     console.log(arrOfCars);
// }
// myVar(["car1", "car2"])

// const cars = (arrOfCars) => {
//     for(let i = 0; i < arrOfCars.length; i++) {
//         console.log(arrOfCars[i]);
//         console.log(i);
//     }
// }
        
// const actualVehicles = ["Audi S4", "Toyota", "6 train"]

// cars(actualVehicles)
// cars(["car1", "car2"])

// const addThreeNumbers = (num1, num2, num3) => {
//     return num1 + num2 + num3
// }

// const squareNumber = (num, ...otherNums) => {
//     // return num * num;
//     console.log(otherNums)
//     return num ** 2;
// }

// function squaringNumber (num) {
//     // return num * num;
//     return num ** 2;
// }

// const myTotal = addThreeNumbers(3, 5, 14)
// console.log(myTotal);
// console.log(squareNumber(5, 12, 25, 13, 19))
// console.log(squareNumber(5))

// function computeArea(width, height) {
//     const totalArea = width * height;
//     return `The area of a rectangle with a width of ${width} and a height of ${height} is ${totalArea} square units`
// }

// console.log(computeArea(5, 25));

// function planetHasWater(planet) {
//     planet = planet.toLowerCase();
//     if(planet === 'earth' || planet === 'mars') return true;
//     return false;
// }

// console.log( planetHasWater('Earth') ) //=> true
// console.log( planetHasWater('Venus') ) //=> false
// // Test the bonus...
// console.log( planetHasWater('mArS') ) //=> true


// function addPoints (player) {
//     let playerOneScore = 0;
//     let playerTwoScore = 0;
//     if(player === 'player1') {
//         playerOneScore += 10;
//     } else if(player === 'player2') {
//         playerTwoScore += 10
//     }
// }

// console.log(addPoints('player2'))

// Find all the prime factors of a number

// function prime(num) {
//     // The definition of prime is only divisible by 1 and itself
//     for(let i = 2; i <= Math.sqrt(num); i++) {
//         if(num % i === 0) return false;
//     }
//     return true;
// }

// // Find if a number is a factor of another number
// function factor(num1, num2) {
//     if(num2 % num1 === 0) return true;
//     return false;
// }

// // Find all the prime factors of a number
// function primeFactors(num) {
//     let myPrimeFactors = []
//     for(let i = 2; i <= num; i++) {
//         if(factor(i, num) && prime(i)) myPrimeFactors.push(i);
//     }
//     return myPrimeFactors
// }

// console.log(primeFactors(12));

// Recursion

// function factorial(num) {
//     if(num === 1) return num;
//     return num * factorial(num - 1);
// }

// console.log(factorial(5)) //120
// // Run factorial 5 => return 5 * factorial(4);
// // Run factorial 4 => return 4 * factorial(3);
// // Run factorial 3 => return 3 * factorial(2);
// // Run factorial 2 => return 2 * factorial(1);
// // Run factorial 1 => return 1;
// // Factorial 2 => return 2 * 1 = 2;
// // Factorial 3 => return 3 * 2 = 6;
// // Factorial 4 => return 4 * 6 = 24;
// // Factorial 5 => return 5 * 24 = 120;
// console.log(factorial(4)) //24


// let intro = "Hi, my name is Eric";

// function greeting () {
//     let characterI = '';
//     for(let i = 0; i < intro.length; i++) {
//         characterI += intro[i];
//         console.log(characterI);
//     }
//     return characterI;
// }

// console.log(greeting());

// function addingThings(num1, num2) {
//     const total = 0
//     for(let i = 0; i < num1; i++) {
//         console.log(i)
//     }
//     console.log(i);
// }

// addingThings(10, 15);


// function eulerProblem2(num) {
//     let array = [1, 2];
//     if (num === 1) return [1];
//     if (num === 2) return array;
//     for (let i = 2; i < num; i ++) {
//       array.push(array.at(-1) + array.at(-2));
//     }
//     let evensArray = [];
//     for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) evensArray.push(array[i]);
//     }
//     if (evensArray.reduce((p, v) => p + v) <= 4000000) {
//       return evensArray.reduce((p, v) => p + v);
//     } else {return false}
//   }

//   console.log(eulerProblem2(10))


/*
Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
=> "Peanutbutter"
*/

// const printLongestWord = (arr) => {
//     let longestWord = '';
//     // for(let i = 0; i < arr.length; i++) {
//     //     if(arr[i].length > longestWord.length) longestWord = arr[i];
//     // }
//     arr.forEach(word => {
//         if(word.length > longestWord.length) longestWord = word;
//     })
//     return longestWord;
// }

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
// console.log(printLongestWord(["abc", "123", "hello", "world", "bootcamp"]));

// const fibonacciEvensSum = (numberOfTerms) => {
//     if(numberOfTerms < 1) return "Seriously put in a positive integer and stop annoying me"
//     if(numberOfTerms === 1) return 0;
//     if(numberOfTerms === 2) return 2;
//     let fibSequence = [1, 2];
//     let evenTotal = 2;
//     for(let i = 2; i < numberOfTerms; i++) {
//         const currentValue = fibSequence[i - 1] + fibSequence[i - 2];
//         // console.log(`when i is ${i}, the currentValue is ${currentValue}`)
//         fibSequence.push(currentValue);
//         if(currentValue % 2 === 0) evenTotal += currentValue;
//     }
//     // fibSequence.forEach(num => {
//     //     if(num % 2 === 0) evenTotal += num;
//     //     // if(num % 2 === 0) evenTotal = evenTotal + num;
//     // })
//     // console.log(fibSequence);
//     return evenTotal;
// }

// console.log(fibonacciEvensSum(10));

// function getMultipleLengths (arrOfStrings) {
//     let myStringLengths = [];
//     arrOfStrings.forEach(string => {
//         myStringLengths.push(string.length);
//     });
//     return myStringLengths;
// } 

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// const medianNumber = (arrOfNums) => {
//     arrOfNums.sort((a, b) => {
//         return a - b;
//     })
//     // console.log(arrOfNums)
//     if(arrOfNums.length % 2 === 1) {
//         // arr[1, 2, 3] => index 1, which is 2;
//         // arr[1, 2, 3, 4, 5] => index 2, which is 3;
//         // arr[1, 2, 3, 4, 5, 6, 7] => index 3, which is 4;
//         return arrOfNums[Math.floor(arrOfNums.length / 2)]
//     } else {
//         // arr[1, 2] => index 1, which is 2;
//         // arr[1, 2, 3, 4] => index 2, which is 3;
//         // arr[1, 2, 3, 4, 5, 6] => index 3, which is 4;
//         let median = arrOfNums.length / 2;
//         // let total = arrOfNums[median] + arrOfNums[median - 1];
//         return [arrOfNums[median], arrOfNums[median - 1]]
//     }
// }
// console.log(medianNumber([14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]));
// console.log(medianNumber([1, 2, 3, 4, 5, 6, 7])) //4
// console.log(medianNumber([1, 2, 3, 4, 5])) //3
// console.log(medianNumber([1, 2, 3])) //2
// console.log(medianNumber([1])) //1
// console.log(medianNumber([1, 2, 3, 4, 5, 6])) //[3, 4]
// console.log(medianNumber([1, 2, 3, 4])) //[2, 3]
// console.log(medianNumber([1, 2])) //[1, 2]

function checkPalindrome(word) {
    word = word.toLowerCase()
    // return word === word.split('').reverse().join('');
    let lastLetter = word.length - 1;
    let start = 0;
    // for(let i = 0; i < letters/2; i++) {
    //     if(word[i] !== word[letters - 1 - i]) return false;
    // }
    while(start < lastLetter) {
        if(word[start] === " " || word[start] === '.' || word[start] === ',') {
            start++;
        } else if(word[lastLetter] === " " || word[lastLetter] === '.' || word[lastLetter] === ',') {
            lastLetter--;
        } else if(word[start] !== word[lastLetter]) {
            return false;
        } else {
            start++;
            lastLetter--;
        }
    }
    return true;
}

console.log(checkPalindrome("Rad . ,ar"));
console.log(checkPalindrome("Borscht"));
