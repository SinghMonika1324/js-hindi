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