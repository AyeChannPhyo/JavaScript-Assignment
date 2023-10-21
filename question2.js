// function declaration for calculate BMI
function calculateBMI(weight, height) {
  result = weight / (height * height); // formula for BMI
  return result; // return the value
}

// weight in kg and height in meter
const weight1 = 70;
const height1 = 1.75;

const weight2 = 85;
const height2 = 1.82;

// function calling
const bmi1 = calculateBMI(weight1, height1).toFixed(1);
const bmi2 = calculateBMI(weight2, height2).toFixed(1);

console.log(
  `For a weight of ${weight1} kg and height of ${height1} m, the BMI is ${bmi1}.`
);
console.log(
  `For a weight of ${weight2} kg and height of ${height2} m, the BMI is ${bmi2}.`
);
