/*console.log(2>1);
console.log(2 >=1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2!= 1);
*/

console.log("2" >1);
console.log("02" >1);

console.log(null >0); //false
console.log(null ==0);//false
console.log(null >=0);//true

/*The reason is that an equality check == and comparisons > < >= <= work differently

coomparisons convert null to a number , trearing it as 0.
that's why (3) null >=0 is true and (1) null >0 false.*/


//avoid that below comparison
console.log(undefined== 0); //false
console.log(undefined> 0); //false
console.log(undefined < 0);//false
console.log(undefined >=0);//false

//do that below comparison
//=== -> also check datatypes

console.log("2" ==2); //true
console.log("2" ===2); //false
