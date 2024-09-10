function convertToRoman(num) {
  // Define the Roman numerals and their corresponding values
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  // Initialize an empty string to build the Roman numeral
  let roman = '';

  // Iterate over the Roman numerals array
  for (let i = 0; i < romanNumerals.length; i++) {
    // While the current value fits into num, add the corresponding numeral to the string
    while (num >= romanNumerals[i].value) {
      roman += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }

  // Return the constructed Roman numeral
  return roman;
}

// Test the function
console.log(convertToRoman(36));  // Output: XXXVI
console.log(convertToRoman(3999)); // Output: MMMCMXCIX
