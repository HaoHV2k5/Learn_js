
// console.log(`your age is: ${age} year old`);
// console.log(`the price is: ${price}`);
// console.log(`your gpa is: ${gpa}`);
// console.log(typeof age)
// console.log(typeof price)
// console.log(typeof gpa)

// let fullName = "huynh van hao";
// let favariteFood = 'mam kho'
// console.log(typeof fullName)
// console.log(`your nam is ${fullName}`);
// console.log(`my favarite food is ${favariteFood}`)

// let fullName = "huynh van hao"
// let age = 20
// let isStudent = true;

// document.getElementById("p1").textContent = `your name is : ${fullName}`;
// document.getElementById("p2").textContent = `your age is: ${age}`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`


// let username = window.prompt("what's your username?");
// console.log(username);
let username;

document.getElementById("idSubmit").onclick = function () {
    username = document.getElementById("test").value;
    document.getElementById("myH1").textContent = username;
}