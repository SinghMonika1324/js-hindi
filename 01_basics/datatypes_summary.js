// #Primitive datatype

//7 types: String , Number , Boolean , null , undefined , Symbol , BigInt

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 752235266758606436446n




//Reference (Non- primitive)

//Array , Objects, Functions

const heros =["shaktiman" , "naagraj" , "doga"];
let myObj ={
    name: "monika" ,
    age : 20,
}

const myFunction = function () {
    console.log("Hello world");   
}


// ************************************************************************************************

//Stack (Primitive) , Heap(Non-primitive)

let myYoutubename ="jggiiuh"

let anothername = myYoutubename;
anothername ="hjjfy"


console.log(myYoutubename);
console.log(anothername);

let userOne={
    email : "monikasingh@gmail.com",
    upi :"ok@sbl",
}

let userTwo = userOne

userTwo.email = "kjhjjh"

console.log(userOne.email);
console.log(userTwo.email);


