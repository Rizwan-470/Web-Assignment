// Task 1: Add Two Numbers
function addNumbers(a, b) {
    return a + b;
  }
  
  let result = addNumbers(5, 3);
  console.log(result);

  
// Task 2: Check Even or Odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  console.log(checkEvenOdd(10)); // Even
  console.log(checkEvenOdd(7));  // Odd
  

// Task 3: Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
  }
  
  console.log(celsiusToFahrenheit(0));   // 32
  console.log(celsiusToFahrenheit(25));  // 77
  

// Task 4: Return Full Name
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
  }
  
  console.log(getFullName("Ali", "Khan")); // Ali Khan
  

// Task 5: Square a Number
function squareNumber(num) {
    return num * num;
  }
  
  console.log(squareNumber(5)); // 25
  console.log(squareNumber(8)); // 64
  

//   Task 6: Count Vowels
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(countVowels("JavaScript")); // 3
  console.log(countVowels("Hello World")); // 3
  

// Task 7: Find Maximum of Three Numbers
function findMax(a, b, c) {
    let max;
  
    if (a >= b && a >= c) {
      max = a;
    } else if (b >= a && b >= c) {
      max = b;
    } else {
      max = c;
    }
  
    return max;
  }
  
  console.log(findMax(10, 25, 15)); // 25
  console.log(findMax(5, 5, 3));    // 5
  

// Task 8: Reverse a String
function reverseString(str) {
    let reversed = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
  
    return reversed;
  }

  console.log(reverseString("hello")); // olleh
  console.log(reverseString("JavaScript")); // tpircSavaJ

  
//   Task 9: Palindrome Check
function isPalindrome(word) {
    // Convert to lowercase to ignore case
    word = word.toLowerCase();
    
    // Reverse the word
    let reversed = word.split("").reverse().join("");
    
    // Check if original and reversed are the same
    return word === reversed;
  }
  
  console.log(isPalindrome("level")); // true
  console.log(isPalindrome("Hello")); // false
  console.log(isPalindrome("Madam")); // true
  

// Task 10: Factorial
function factorial(n) {
    if (n < 0) return "Invalid input"; // Factorial not defined for negative numbers
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(5)); // 120
  console.log(factorial(0)); // 1
  console.log(factorial(7)); // 5040
  

// Task 11: Largest Number in Array
function largestInArray(arr) {
    if (arr.length === 0) return "Array is empty";
    
    let max = arr[0]; // Assume first element is the largest
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]; // Update max if a bigger number is found
      }
    }
    
    return max;
  }
  
  console.log(largestInArray([5, 12, 8, 20, 3])); // 20
  console.log(largestInArray([-5, -10, -3]));     // -3
  


//   Task 12: Return Even Numbers Only
function getEvenNumbers(arr) {
    let evenNumbers = [];
    
    for (let num of arr) {
      if (num % 2 === 0) {
        evenNumbers.push(num);
      }
    }
    
    return evenNumbers;
  }

  console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
  console.log(getEvenNumbers([7, 9, 12, 14]));     // [12, 14]
  

//   Task 13: Sum of Array Numbers
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  }
  
  console.log(sumArray([1, 2, 3, 4, 5])); // 15
  console.log(sumArray([10, 20, 30]));    // 60
  

//   Task 13: Calculate Discount Price
// What you have to do:
// Create a function that calculates the final price after discount.

// How to think (Real Life):
// When you go shopping, the shop gives you a discount.
// Your function should calculate how much money is left after discount.
// Steps:
// 1. Take two inputs:
// o Original price
// o Discount percentage
// 2. Calculate discount amount.
// 3. Subtract discount from original price.
// 4. Return the final price.
function calculateDiscountPrice(originalPrice, discountPercent) {
    // Step 2: Calculate discount amount
    let discountAmount = (originalPrice * discountPercent) / 100;
    
    // Step 3: Subtract discount from original price
    let finalPrice = originalPrice - discountAmount;
    
    // Step 4: Return the final price
    return finalPrice;
  }
  
  console.log(calculateDiscountPrice(1000, 20)); // 800
  console.log(calculateDiscountPrice(450, 10));  // 405


//   Task 14: Generate 4-Digit OTP


function generateOTP() {
    let otp = Math.floor(Math.random() * 9000) + 1000;
    return otp;
  }
  
  console.log(generateOTP()); // e.g., 4721
  console.log(generateOTP()); // e.g., 8364
  

//   Task 15: Count Words in a Sentence
function countWords(sentence) {
    // Step 1: Remove extra spaces from start and end
    sentence = sentence.trim();
    
    // Step 2: Split the sentence into words (using spaces)
    // Step 3: Count the words
    // If sentence is empty, return 0
    if (sentence === "") return 0;
    
    let words = sentence.split(/\s+/); // splits by one or more spaces
    return words.length; // Step 4: Return count
  }
  
  console.log(countWords("Hello world!")); // 2
  console.log(countWords("   JavaScript is awesome   ")); // 3
  console.log(countWords("")); // 0

  
//   Task 16: Student Grade Calculator
function calculateGrade(marks) {
    if (marks >= 90) {
      return "A";
    } else if (marks >= 75) {
      return "B";
    } else if (marks >= 50) {
      return "C";
    } else {
      return "Fail";
    }
  }
  
  console.log(calculateGrade(95)); // A
  console.log(calculateGrade(80)); // B
  console.log(calculateGrade(55)); // C
  console.log(calculateGrade(40)); // Fail
  

//   Task 17: Voting Eligibility
function checkVotingEligibility(age) {
    if (age >= 18) {
      return "Eligible to vote";
    } else {
      return "Not eligible to vote";
    }
  }
  
  console.log(checkVotingEligibility(20)); // Eligible to vote
  console.log(checkVotingEligibility(16)); // Not eligible to vote
  