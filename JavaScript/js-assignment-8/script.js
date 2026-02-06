// Task 1: Access Employee Information

const company = {
    name: "Tech Solutions",
    employees: {
      emp1: { name: "Ali", role: "Developer", salary: 80000 },
      emp2: { name: "Sara", role: "Designer", salary: 70000 }
    }
  };
  console.log(company.employees.emp1.role);  
  console.log(company.employees.emp2.salary);
  

//   Task 2: Update Object Property
const product = {
    id: 101,
    name: "Headphones",
    price: 3500
  };
  console.log(product);
  
// Change the price
  product.price = 4000;
  
  console.log(product);


//   Task 3: Object with Array
const student = {
    name: "Ahmed",
    age: 20,
    subjects: ["Math", "Physics", "Computer"]
  };
  
// Log all subjects
  console.log(student.subjects);
  
// Log the second subject
  console.log(student.subjects[1]);

  
// Task 4: Array of Objects
const students = [
    { name: "Ayesha", marks: 85 },
    { name: "Bilal", marks: 78 },
    { name: "Hina", marks: 92 }
  ];
  
// Log the name of the first student
  console.log(students[0].name);
  
// Log the marks of the last student
  console.log(students[students.length - 1].marks);
  
  

//   Task 5: Nested Object (Real-World Example)
const user = {
    username: "user123",
    profile: {
      email: "user@mail.com",
      address: {
        city: "Karachi",
        zip: "75000"
      }
    }
  };
  
// Log user’s email
  console.log(user.profile.email);
  
// Log city name
  console.log(user.profile.address.city);

  
// Task 6: Modify Nested Object Value
const order = {
    orderId: 555,
    delivery: {
      status: "Pending",
      days: 5
    }
  };
  
// Change status to "Delivered"
  order.delivery.status = "Delivered";
  
// Log updated order object
  console.log(order);
  

// Task 7: Object with Array of Objects
const cart = {
    items: [
      { name: "Shirt", price: 2000 },
      { name: "Shoes", price: 5000 }
    ]
  };
  
  // Log price of Shoes
  console.log(cart.items[1].price);
  
  // Change Shirt price to 2200
  cart.items[0].price = 2200;
  
  // Log updated items array
  console.log(cart.items);

  
// Task 8: Add New Property
const mobile = {
    brand: "Samsung",
    model: "S21"
  };
  
  // Add a new property
  mobile.price = 120000;
  
  // Log the complete object
  console.log(mobile);



// Task 9: Loop Through Object Properties
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
  };
  
  for (let key in car) {
    console.log(key + ": " + car[key]);
  }

  

// Task 10: Mini Real-World Object
const menuItem = {
    name: "Burger",
    price: 450,
    available: true
  };
  
  // Log item name and price
  console.log("Name:", menuItem.name);
  console.log("Price:", menuItem.price);
  
  // Change availability to false
  menuItem.available = false;
  
  // Log updated object
  console.log(menuItem);

  
  