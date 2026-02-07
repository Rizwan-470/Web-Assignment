// Task 1: Select Element by ID

let heading = document.getElementById("heading");
heading.style.fontFamily = "calibri";
heading.style.textAlign = "center";

heading.innerText = "DOM Element Selected by ID";

console.log(heading);



// Task 2: Select Elements by Tag Name

let paraghraph = document.getElementsByTagName("p");
paraghraph[0].innerText = "Paraghraph changed";
// paraghraph[1].innerText = "Paraghraph changed";
// paraghraph[2].innerText = "Paraghraph changed";

console.log(paraghraph[0]);



// Task 3: Select Elements by Class Name

let button = document.getElementsByClassName("userbtn");
button[1].textContent = "Click me";

console.log(button[1]);



// Task 4: Use querySelector
let head2 = document.querySelector("h2");
head2.style.color = "blue"

console.log(head2);



// Task 5: Use querySelectorAll
let listItems = document.querySelectorAll("li");
listItems.forEach(function (item) {
    item.style.color = "green";
});

console.log(listItems);



// Task 6: Change Style Using Selected Element
let para = document.querySelector(".para");
para.style.fontSize = "25px";
para.style.color = "orange";
para.style.backgroundColor = "gray";


console.log(para);




