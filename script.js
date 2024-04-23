//! element selectors = Methods used to target and manipulate HTML elements
//?                     They allow you to select one or multiple HTML elements
//?                     from the DOM (Document Object Model)

//* 1. document.getElementByID()          // ELEMENT OR NULL
//* 2. document.getElementsClassName()    // HTML COLLECTION
//* 3. document.getElementsByTagName()    // HTML COLLECTION
//* 4. document.querySelector()           // FIRST ELEMENT OR NULL
//* 5. document.querySelectorAll()        // NODELIST

// todo: 1. 
// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading);

// todo: 2.

// const fruits = document.getElementsByClassName("fruits");

// fruits[2].style.backgroundColor = "yellow";

//* iterate all elemets 

// const fruits = document.getElementsByClassName("fruits");

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }

//* Another Example to highlight using forEach()

// const fruits = document.getElementsByClassName("fruits");

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });

// todo: 3.

// const h4Elements = document.getElementsByTagName("h4");

// h4Elements[1].style.backgroundColor = "yellow";

//* To highlight all elements | create new

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

//* Background using forEach()

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
});

// todo: 4.

// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "yellow";

// todo: 5.

// const fruits = document.querySelectorAll(".fruits");

// fruits[1].style.backgroundColor = "yellow";

//* li

// const foods = document.querySelectorAll("li");

// foods.forEach(food => {
//     food.style.backgroundColor = "yellow";
// });