const name = "Micheal"
let age = 25

console.log(name)
console.log(age)
console.log(`He is ${name} by name and ${age} years old`)

function greet(){
    console.log("Hello TechCrush")
}
greet()
const user = {name: "Oghayi", age: 24}; //Objects in a curly bracket
const colors = ["red", "blue", "green"]; //Arrays in a block bracket
console.log(user.name)
console.log(colors[1])

//Control Flow: if...else statements
var myAge = 20
if (myAge > 18){
    console.log("Adult")
}else{
    console.log("Minor")
}
//Loops (for, while)
for(let i=0; i < 5; i++){
    console.log(i)
}
//Functions and Arrow functions
function add(a, b){
    return a + b;
}
console.log(add(20, 50))
const multiply = (c, d) => c * d
console.log(multiply(10, 10))
//Callbacks, Promises and Async/Await
setTimeout(() => {
    console.log("Hello after 2 seconds")
}, 2000)
//Promise example
const promise = new Promise((resolve) => 
resolve("Not Done"))
promise.then((result) =>
console.log(result))
//Async/Await example
async function greetMe(){
    const message = await promise.resolve("Hello Async")
    console.log(message)
}
greetMe()
/*Task:Write a javaScript program that:
1.Takes a list of students and their score
2. Calculate the average score
3. Determine if each student passed or failed*/