// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer


function getSeason(month) {
  switch (month) {
    case "September":
    case "October":
    case "November":
      return "Autumn";
    case "December":
    case "January":
    case "February":
      return "Winter";
    case "March":
    case "April":
    case "May":
      return "Spring";
    case "June":
    case "July":
    case "August":
      return "Summer";
    default:
      return "Invalid month";
  }
}
//This will help to sanitize the user input in proper form
function finalString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

var month = prompt("Enter Month:");

console.log(getSeason(finalString(month)));