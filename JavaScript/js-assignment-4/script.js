// step-2
// Logical AND (&&) – Real Example:

let age = 18;
let feepaid = true;
if (age >= 18 && feepaid) {
    console.log("student can enter in the exam");
}
else {
    console.log("student can't enter in the exam");
}

// step-3
// Logical OR (||) – Real Example:
let emailcorrect = false;
let phonecorrect = true;
let usercanlogin = emailcorrect || phonecorrect;
console.log("a user can login");


// step-4
// Logical NOT (!) – Real Example:
let  isblock = false;
let canaccess = !isblock;
console.log("can access the website?", canaccess);

let  isBlock = true;
let canAccess = !isBlock;
console.log("can access the website?", canAccess);

// step-5
// Combine Logical Operators:
let isLoggedIn = true;
let isPremium = false;
let hasCoupon = true;
let getsDiscount = isLoggedIn && (isPremium || hasCoupon);
console.log("Does the user get a special discount?", getsDiscount);

