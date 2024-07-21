//array

const myArr = [0 ,1,  2 ,3 ,4 ,5 ,6];
const myHeros =["shaktimaan" , "naagraj"];

const myArr2 = new Array(0, 1 ,2 ,3) 
//console.log(myArr); 
/*[
    0, 1, 2, 3,
    4, 5, 6
  ]*/

//console.log(myArr[2]);  according to index we can get element - accesing of element

//Array methods

myArr.push(6); //addition of new element from back side - pass argument
myArr.pop() //deletion of data from back side - no need to pass argument

myArr.unshift(8) // addition of new element from front side - need to pass argument
myArr.shift() // deletion of element from front side - no need to pass argument

//console.log(myArr.includes(9)); //element is present or not - give boolean value
//console.log(myArr.indexOf(3)); //give element's index number and if it is not present give -1

const newArr = myArr.join() ;  //it converts numbers into string
//console.log(myArr);
//console.log(newArr); 0,1,2,3,4,5,6  // type of newArr is String

//slice , splice

console.log("A" , myArr); // A [ 0, 1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1,3);

console.log(myn1);//[ 1, 2 ]
console.log("B", myArr);// B [ 0, 1, 2, 3, 4, 5, 6] //slice don't change the original array

const myn2 = myArr.splice(1,3);
console.log("C" , myArr);C  //[ 0, 4, 5, 6 ] //splice change the originial array 
console.log(myn2); //[ 1, 2 ,3]









