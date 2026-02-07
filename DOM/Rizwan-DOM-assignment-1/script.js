// Task 1: Change Text Using JavaScript

let heading = document.getElementById('heading');

heading.style.fontFamily = "Calibri"
heading.style.textAlign = "center"
heading.style.color = "darkgreen"

heading.innerText = "Welcome to JavaScript DOM"



// Task 2: Change Paragraph Text on Button Click

let parabtn = document.getElementById("changePara");
let para = document.getElementById("para");

parabtn.addEventListener('click', showMsg);
function showMsg() {
    para.innerText = "Paraghraph text changed!"
    para.style.textAlign = "center" //this line means the changed paraghraph will be show in the center of the page horizontally after clicking the button.
}



// Task 3: Change Background Color on Button Click

function lightblue() {
    document.body.style.backgroundColor = "lightblue"
}



// Task 4: Show Alert Message on Button Click

function showAlert() {
    alert("DOM is working!");
}


// Task 5: Update Text Using Input Field

function updateText() {
    let text = document.getElementById("userInput").value;

    document.getElementById("outputText").innerText = text;
}


