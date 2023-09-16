/*
* Problem Statement: Write a program that asks the user for their name and then prints a personalized greeting.
* 
* Input: The input consists of one line. A string representing the user's name.
* 
* Output: Output a single line containing the personalized greeting.
* 
* Constraints: Username should not be more than one string.
* 
* Sample
* Input: Alice
* Output: Hello, Alice! Nice to meet you.
*
*/

// {a,b,c} - {}, {a}, {b}, {c}, {a,b}, {b,c}, {c,a}, {a,b,c} (subset)
// "abc" - "", "a", "b", "c", "ab", "bc", "ac", "abc" (substring)
// [22, 33, 44, 55, 66]
//  0   1    2   3   4
// "abc"
//  0 - a
//  1 - b
//  2 - c



// String length - returns string length
// String slice(start, end) - returns sliced string
// String substring() -
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

function solve(name) { // name = 'jami' - ['j', 'a', 'm', 'i', '\r', '\n']
    // Hello, Jami! Nice to meet you.
    // Your code goes here

    // let output = "Hello, " + name.slice(0, -2) + "! Nice to meet you."; // Concatenation - adding strings0,
    let output = "Hello, " + name.slice(0, name.length-2) + "! Nice to meet you."; // Concatenation - adding strings
    console.log(output);
}

process.stdin.on('data', function (str) {
    solve(str.toString());
});