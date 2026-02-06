// Step 2: for Loop (Simple Counting)
// Task:

for (let rollNo = 1; rollNo <= 5; rollNo++) {
    console.log("rollNumber:", rollNo);    
}

// its output will be:
// rollNumber: 1
// rollNumber: 2
// rollNumber: 3
// rollNumber: 4
// rollNumber: 5

// Explanation:
// In this code, we use a for loop to count from 1 to 5. The loop starts with rollNo set to 1 and continues as long as rollNo is less than or equal to 5. After each iteration, rollNo is incremented by 1. Inside the loop, we log the current value of rollNo to the console.



// Step 3:  while Loop (Simple Condition)
// Task:

let itemNumber = 1;
while (itemNumber <= 3) {
    console.log("itemNumber", itemNumber);
    itemNumber++;    
}
// its output will be:
// itemNumber 1
// itemNumber 2
// itemNumber 3

// Explanation:
// In this code, we use a while loop to count from 1 to 3. The loop starts with itemNumber set to 1 and continues as long as itemNumber is less than or equal to 3. After each iteration, itemNumber is incremented by 1. Inside the loop, we log the current value of itemNumber to the console.



// Step 4: do-while Loop (Run at Least Once)
// Task:

let correctPIN = "1234";
let enteredPIN;

do {
    enteredPIN = prompt("Enter your PIN:");
} while (enteredPIN !== correctPIN);

alert("PIN correct! Access granted.");

// output will be:
// A prompt will appear asking the user to enter their PIN. If the entered PIN is incorrect, the prompt will reappear until the correct PIN ("1234") is entered. Once the correct PIN is entered, an alert will display "PIN correct! Access granted."

// Explanation:
// In this code, we use a do-while loop to repeatedly prompt the user to enter their PIN until they enter the correct one ("1234"). The loop guarantees that the prompt will appear at least once, regardless of the initial value of enteredPIN. After the user enters the correct PIN, an alert is shown to indicate that access has been granted.




// Step 5: Loop with User Input (Very Easy)
// Task:

let times = prompt("How many times do you want to print Hello?");
for ( let i = 1; i <= times; i++) {
    console.log("Hello");
}

// its output will be:
// If the user inputs 3, the output will be:
// Hello
// Hello
// Hello

// Explanation:
// In this code, we first prompt the user to enter a number indicating how many times they want to print "Hello". We then use a for loop that runs from 1 to the number entered by the user. Inside the loop, we log "Hello" to the console the specified number of times.
