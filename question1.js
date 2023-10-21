// Function Declaration
function celsiusToFahrenheit(celsius) {
  fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

// Test Celsius numbers
const celsius1 = 25;
const celsius2 = -10;

// Function Calling
const fahrenheit1 = celsiusToFahrenheit(celsius1);
const fahrenheit2 = celsiusToFahrenheit(celsius2);

console.log(`${celsius1}\u00B0 is equal to ${fahrenheit1}\u00B0F.`);
console.log(`${celsius2}\u00B0 is equal to ${fahrenheit2}\u00B0F.`);
