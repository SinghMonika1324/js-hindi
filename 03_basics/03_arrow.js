const user ={
    username :"monika",
    price: 999,

    welcomeMessage : function(){
        //console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }

}

//user.welcomeMessage()
user.username = "sam"
//user.welcomeMessage()

//console.log(this) -{}

//function chai() {
 //   let username ="monika"
   // console.log(this.username)
//}
//chai() - undefined[this is not working in function and it is only vworking in objects]

//const chai = function(){
 //   let username ="monika"
  //  console.log(this.username)
//}

//chai() - undefined

const chai = () =>{
    let username ="monika"
    console.log(this.username)
    //console.log(this) -{}
}

//chai()- - undefined

//const addTwo=(num1,num2)=>{
  //  return num1 + num2
//}

//const addTwo=(num1,num2)=>   num1 + num2;

//const addTwo=(num1,num2)=>  ( num1 + num2)


const addTwo=(num1,num2)=>   ({username :"monika"})

console.log(addTwo(3,4));
