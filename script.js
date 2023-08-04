//your JS code here. If required.
function firstNonRepeatedCharacter(inputString) {
  // Create a map to store the count of each character in the string
  const charCount = new Map();

  // Count the occurrences of each character in the input string
  for (const char of inputString) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Find the first non-repeated character in the input string
  for (const char of inputString) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  // If there is no non-repeated character, return null
  return null;
}

// Get input from the user using prompt()
const user_input = prompt("Enter a string:");

// Call the function and display the result
const result = firstNonRepeatedCharacter(user_input);

if (result !== null) {
  console.log(`The first non-repeated character is: ${result}`);
} else {
  console.log("There is no non-repeated character in the input string.");
}
