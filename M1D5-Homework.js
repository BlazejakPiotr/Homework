/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/



/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

    function crazySum(int1, int2){
        return (int1 === int2) ? (int1 + int2) * 3 : int1 + int2
    }
    // Logging same value
    // console.log(crazySum(1,1))

    // Logging diffrent values
    // console.log(crazySum(1,2))


/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

    function strivify(str){
        return (str === "Strive") ? str : `Strive ${str}`
    }
    // Loging string "Strive"
    // console.log(strivify("Strive"))

    // Logging string "Piotr"
    // console.log(strivify("Piotr"))


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

    function reverseString(str){
        return str.split("").reverse().join("")
    }
    // Logging reversed string
    // console.log(reverseString("reverse test"))


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

    function upperFirst(str){
        const arr = str.split(" ")
        for (let i = 0; i < arr.length; i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return arr.join(" ")
    }
    // Logging string with capitalized first letter of each word
    // console.log(upperFirst("just testing my string"))


/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

    function cutString(str){        
        return str.substring(1, str.length - 1)
    }
    // Logging cutted string
    // console.log (cutString("Cutting"))


/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

    function giveMeRandom(n){
        const numsArr = []
        for (let i = 0; i < n; i++){
            numsArr.push(Math.floor(Math.random() * 10))
        }
        return numsArr
    }
    // Logging array with random numbers
    // console.log(giveMeRandom(4))

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/