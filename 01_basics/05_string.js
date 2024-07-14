const name ="monika"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name}  and my repo count is ${repoCount} `);   //string  interpolation

const gameName = new String('monika-singh')
//console.log(gameName[0]);
//console.log(gameName.__proto__.charAt);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

const newString  = gameName.substring(0,4) ;
console.log(newString);

const anotherString = gameName.slice(-6 , 4);
console.log(anotherString);

const newStringOne = "   monika   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://monika.com/monika%20singh"


console.log(url.replace('%20' , '-'));
console.log(url.includes('monika'));

console.log(gameName.split('-'));





