//if
const isUserloggedIn = true
const temperature = 41

//if (temperature <50) {
  //  console.log("less than 50");
//}
//else{
 //console.log("temperature is grater than 50");
//}

//const score =200

//if(score >100){
 //   const power = "fly"
  //  console.log(`User power: ${power}`);
//}


const balance =1000

//if(balance >500) console.log("test"), console.log("test2"); =>don't do this (unreadable code)

//if (balance < 500) {
   // console.log("less than 500");
//}else if (balance < 750) {
   // console.log("less than 750");
//}
//else if (balance < 900) {
   // console.log("less than 750");
//}
//else{
  //  console.log("less than 1200");
//}

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}
  


//< ,>, <= , >=, ==, !=, === ,!==