// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const today = new Date();//Here we are creating object today so it can register todays day and give result accordingly 
console.log("What is the year today?", today.getFullYear());
console.log("What is the month today as a number?", today.getMonth() + 1); //Here 1 is use to start month from 1 not from 0 so 1 stands for Jan now if we use + 1
console.log("What is the date today?", today.getDate());
console.log("What is the day today as a number?", today.getDay());
console.log("What is the hours now?", today.getHours());
console.log("What is the minutes now?", today.getMinutes());
console.log("Find out the numbers of seconds elapsed from January 1, 1970 to now.", today.getTime()/1000);
