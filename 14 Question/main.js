// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

var userInput = prompt("Enter a number to check even or not:");
var checkNum = userInput % 2;
if (checkNum == 0) {
    alert("Number is even.");
}else{
    alert("Number is odd.")
}