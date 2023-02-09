// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

var userInput = prompt("Enter your age:");
if (userInput >= 18) {
    console.log( "You are old enough to drive");
    alert("You are old enough to drive")
}
else{
    console.log("You can drive if you are 18 or above.");
    alert("You can drive only if you are 18 or above.")
}