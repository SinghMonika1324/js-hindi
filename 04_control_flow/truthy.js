const userEmail ="h@hitesh.ai"

if(userEmail){
    console.log("got user email");
}
else{
    console.log("Don't have user email");
}


//falsy values

//false, 0 , -0, BigInt 0n , "" , null, undefined, NaN

//truthy values

//"0" , 'false' , " ",[], {} , function(){}

const isuserEmail =[]

if (isuserEmail.length ===0) {
    console.log("Array is Empty");
}

const emptyObj ={}
if(Object.keys(emptyObj).length===0){
console.log("Oject is Empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5?? 10 -> 5
//val1 = null ??10 -> 10

//var1 = undefined ?? 15 -> 15

//val1 = null ??10?? 20 -> 10



//04    truthconsole.log(var1);

//TERNARY OPERATOR

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80");