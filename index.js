// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

function calculateSum(a,b){
    let sum = a + b;
    return sum;
}
// console.log(calculateSum(15,5)); Expected Output: summation of two numbers

// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

const isEven = (numb) =>{
    if(numb == 0 || numb % 2 == 0){
        return "true";
    }
    else {
        return "false";
    }
}
// console.log(isEven(81)); Expected Output: false

// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

const findMax = (ar) =>{
    return Math.max(...ar);
}
// console.log(findMax(arr)); Expected Output: the maximum value of the array

// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

const reverseString = (str) =>{
    let newStr = "";
    for(let i = str.length-1 ; i>=0 ; i--){
        newStr += str[i];
    }
    return newStr;
}
// console.log(reverseString(string)); Expected Output: string in reverse order

// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

const filterOddNumbers = (ar) =>{
    return ar.filter(num => num % 2 !=0);
}
// console.log(filterOddNumbers(arr)); Expected Output: only the odd numbers

// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

const sumArray = (ar) =>{
    let sum = 0;
    for(let i = 0;i<ar.length;i++){
        sum += ar[i];
    }
    return sum;
}
// console.log(sumArray(arr4)); Expected Output: summation

// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.

const sortArray = (ar) => {
    return ar.sort()
}
// console.log(sortArray(arr)); Expected Output: array in ascending order

// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter 
//capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"

const capitalizeFirstLetter = (str) =>{
    let newStr = "";
    newStr = str[0].toUpperCase();
    for(let i = 1 ; i<str.length;i++){
        newStr += str[i];
    }
    return newStr;
}
// console.log(capitalizeFirstLetter("china")); Expected Output: China