// Getting random number
maxnumber = Math.floor(Math.random() * 100);
minnumber = Math.floor(Math.random() * 100);

// Function Declaration
function numberGuessingGame(maxnum, minnum) {
  // Conditions for Maximum number
  if (mybignum > maxnumber) {
    console.log(
      `Random maximum number is ${maxnumber}.\nYour maximum number is ${mybignum}.\n So, it is big.`
    );
  } else if (mybignum < maxnumber) {
    console.log(
      `Random maximum number is ${maxnumber}.\nYour maximum number is ${mybignum}.\n So, it is small.`
    );
  } else {
    console.log(
      `Random maximum number is ${maxnumber}.\nYour maximum number is ${mybignum}.\n So, it is equal.`
    );
  }

  // Conditions for Minimum number
  if (mysmallnum > minnumber) {
    console.log(
      `Random minimum number is ${minnumber}.\nYour minimum number is ${mysmallnum}.\n So, it is big.`
    );
  } else if (mysmallnum < minnumber) {
    console.log(
      `Random minimum number is ${minnumber}.\nYour minimum number is ${mysmallnum}.\n So, it is small.`
    );
  } else {
    console.log(
      `Random minimum number is ${minnumber}.\nYour minimum number is ${mysmallnum}.\n So, it is equal.`
    );
  }
}

// Test big and small number
mybignum = 80;
mysmallnum = 32;

// Function Calling
numberGuessingGame(80, 32);
