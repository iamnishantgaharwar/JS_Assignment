// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-79, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

var userInput = prompt("Enter your marks:");

if (userInput >= 80 && userInput <= 100) {
     alert("You got A grade.");
}
else if(userInput >= 70 && userInput <= 79){
     alert("You got B grade.");
}
else if(userInput >= 60 && userInput <= 69){
     alert("You got C grade.");
}
else if(userInput >= 50 && userInput <= 59){
     alert("You got D grade.");
}
else if(userInput >= 0 && userInput <= 49){
     alert("You got F grade.");
}else{
     alert("Invalid Value.")
}

