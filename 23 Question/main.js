function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    
    // check if num is divisible by any number less than or equal to its square root
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
}  
let userInput = prompt("Enter your number:");
console.log(alert(isPrime(userInput)));