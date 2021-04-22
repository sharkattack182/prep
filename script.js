// let myStr = "hello world!";

// function reverseStr(string) {
//     const newStr = string.split("");
//     const revStr = newStr.reverse();
//     myStr = revStr.join("");
//     return myStr;
// }

// reverseStr(myStr)

// console.log(myStr);



// console.log("one");
// setTimeout(function() {
//     console.log("two")
// },0);
// console.log("three")


// function fizz(n) {
//     for(let i = 1; i <= n; i++) {
//         let num = i;

//         if(num % 5 == 0 && num % 3 == 0) {
//             console.log("FuzzBuzz")
//         } else if(num % 5 == 0) {
//             console.log("Buzz")
//         } else if(num % 3 == 0) {
//             console.log("Fizz")
//         } else {
//             console.log(num)
//         }
//     }
// }

// fizz(15)


// SELF EXECUTING CLOSURE

// console.log("start");
// for(var i = 0; i<5; i++) (function(i) {
//     setTimeout(function() {
//         console.log(i)
//     }, 0)
// }) (i);
// console.log("end")

// (function() {
//     var a = b = 3;
// }) ();
// console.log("a defined?" + (typeof a !== "undefined"))
// console.log("b defined?" + (typeof b !== "undefined"))


// var array = [8,7,5,3,3,0,9,1];


// function sort(arr) {
//     var sorted = arr.sort((a,b) => a-b);
//     console.log(sorted)
// };


// function removeDup(arr) {
//     let unique = [];
//     arr.forEach(element => {
//         if(!unique.includes(element)) {
//             unique.push(element)
//         }
//     });

//     console.log(unique)
// }


// function findNumGreaterThan(num, arr) {
//     let returnArr = [];
//     arr.forEach(element => {
//         if(element < num) {
//             returnArr.push(element)
//         } 
//     });

//     console.log(returnArr)
// }
// sort(array);
// removeDup(array);
// findNumGreaterThan(7,array)


// function foo1() {
//     return {
//         bar: hello
//     }
// }


// function foo1() {
//     return
//     {
//         bar: hello
//     }
// }

// function isInteger(x) {
//     if(typeof x === "number") {
//         console.log("true")
//     }else {
//         console.log("false")
//     }
// }


// isInteger(4);
// isInteger("x")

function isPalindrome(string) {
   return string == string.split("").reverse().join("")
};

isPalindrome("racecar");
isPalindrome("blue")