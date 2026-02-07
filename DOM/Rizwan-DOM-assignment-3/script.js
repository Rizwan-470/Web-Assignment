let heading = document.getElementById("header");
heading.style.fontFamily = "calibri";
heading.style.textAlign = "center";
heading.style.border = "2px solid black";
heading.style.backgroundColor = "lightgray";
heading.style.padding = "20px";




// Task 1: Get an Attribute Value

const image = document.getElementById('myImage');

const srcValue = image.getAttribute('src');
image.style.cssText = "display:block; margin: 0 auto;";

console.log("Src of the image is:", srcValue);



// Task 2: Change Image Source
let anImage = document.getElementById("anImage");
let button = document.getElementById("imagebtn");

button.addEventListener("click", () => {
    anImage.src = "istockphoto.jpg";
    anImage.style.cssText = "display:block; margin: 0 auto;";
    console.log("image changed to:", anImage);
});



// Task 3: Set Attribute to Input Field
const Labal = document.getElementById("Labal")
Labal.style.fontFamily = "calibri";

const input = document.getElementById("inputText");
input.setAttribute("placeholder", "Enter your name");




// Task 4: Remove an Attribute
const input2 = document.getElementById("myInput");
const button2 = document.getElementById("enableBtn");

button2.addEventListener("click", () => {
    input2.removeAttribute("disabled");

    console.log("this input is enabled now");

});


// Task 5: Check if Attribute Exists
let para = document.getElementById("para");
para.style.fontFamily = "calibri";
para.style.fontSize = "25px"

let hasClass = para.hasAttribute("class");

console.log("hasClass");






