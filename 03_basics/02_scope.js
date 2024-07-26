//var c =300
let a =300

if(true){
     let a =10
const b =20
//var c=30
//console.log("INNER:" , a);
}
//console.log(a);

function one() {
    const username ="monika"

    function two() {
        const website ="youtube"
       // console.log(username);
    }
    //console.log(website);

    two()

}

one()

if (true) {
    const username ="monika"
    if( username ==="monika"){
         const website =" youtube"
      //console.log(username +  website);  
    }
   // console.log(website);- notrun
}
//console.log(username);- not run








// ++++++++++++++++++++INTERSTING+++++++++++++++++++++++++++++

//addOne(5)- not giving error
function addOne(num) {
    return num +1
}



//addTwo(5)- giving error- hoisting
const addTwo = function(num){
    return num +2
}

