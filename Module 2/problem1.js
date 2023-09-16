/*
* Problem Statement: Write a program that swaps the values of two variables.
*
* Input: The input consists of two integers.
* 
* Output: Output consists of two integers.
* 
* Constraints: -2^31 ≤ |S| ≤ 2^31 - 1
* 
* Sample
* Input: 10 20
* Output:
* Before swapping: num1 = 10, num2 = 20
* After swapping: num1 = 20, num2 = 10
*
*/

function solve(numbers) { // numbers = "10 20\r\n"
    let arr = numbers.split(' '); // ["10", "20\r\n"]
    let num1 = parseInt(arr[0]); // 10
    let num2 = parseInt(arr[1]); // 20
    console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`); // Interpolation  `... ${} ...`
    // console.log("Before swapping: num1 = " + num1 + ", num2 = " + num2); // Concatenation

    // num1 = 10, num2 = 20
    let temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`);

    // Swapping Mechanism
    // pot1 = oil, pot2 = milk, pot3 = EMPTY
    // pot3 = pot1
    // pot1 = pot2
    // pot2 = pot3
}

process.stdin.on('data', function (numbers) {
   solve(numbers.toString());
});