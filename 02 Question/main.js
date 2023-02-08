// 02. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

var firstName = "Nishant";
var lastName = "Gaharwar";
var isMarried = false;
var country = "India";
var age = 23

var allDetails = `
    Name: ${firstName} ${lastName}
    Age: ${age}
    Country: ${country}
    Married: ${isMarried}
`;

// Logging all the details
console.log(allDetails);