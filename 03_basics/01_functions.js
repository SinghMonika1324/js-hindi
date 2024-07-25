function sayMyname(){
    console.log("M");
    console.log("O");
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("A");
 }

 //sayMyname();

 //function addTwoNumbers(num1,num2){
  //  console.log(num1+num2);
 //}

 //addTwoNumbers(3,5)

 function addTwoNumbers(num1,num2){
     //let result = num1+num2;
     //return result;
     return num1+num2
   }

   const result = addTwoNumbers(3,5)
   //console.log("Results", result);

   function loginUserMessage(username ="sammy"){
    if(!username){
        console.log("Please Enter a name")
        return
    }
    return `${username} just logged in` 
   }

  //console.log(loginUserMessage("monika")) 


  function calculateCartPrice(...num1){
   return num1
  }
 // console.log(calculateCartPrice(200,400,500));

 const user = {
    username: "monika",
    price: 199
  };
  
  function handleObjects(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  }
  
  //handleObjects(user); //Username is monika and price is 199

  handleObjects({
    username: "monika",
    price: 399
  }) //Username is monika and price is 399

  const myNewArray = [200,5000,3567,9000]

  function returnSecondValue(getArray){
    return getArray[2]
  }
  console.log(returnSecondValue(myNewArray));