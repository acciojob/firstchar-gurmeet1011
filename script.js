function firstChar(text) {
  // Trim whitespace from both end
  const trimmedStr = text.trim();
  
  // Return the first character or an empty string if trimmedStr is empty
  return trimmedStr[0] || '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popu
const text = prompt("Enter text:");
alert(firstChar(text));
