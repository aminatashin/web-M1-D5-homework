
/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

const area = function (l1, l2) {
let r = (l1 * l2)
return r
}
let recTangle = area(2,2)
console.log(recTangle)

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (a,b){
    if(a===b){
        let c = (a + b)*3
        return c
    } else {
        let r = (a + b)
        return r
    }
    
   

}
let sum = crazySum(2,5)
console.log(sum)
let same = crazySum(5,5)
console.log(same)

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
let n = (20, 100)
const boundry = function(n){
    if (n || n===400) {
        return true
    } else {
        return false
    }
     
    
}

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(string){
    consol.log(string.toLocaleUpperCase([0]))
}
let y = upperFirst("ashkan")
console.log(y)

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const giveMeRandom = function(n){
if (n){
   return n
   }
}
let u = giveMeRandom(6)
console.log(u)