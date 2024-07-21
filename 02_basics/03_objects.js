//singleton 

//object literals
 //Object.create- constructor
 const mySym = Symbol("key1")

const JsUser={
  name:"Monika",
  "full name":"Monika Singh",
  age:20,
  [mySym] :"mykey1" ,
  location:"Mumbai",
  email:"monikasingh8234@gmail.com",
  isLoggedin: false,
  lastLoginDays:["Monday", "Saturday"],
}

//console.log(JsUser.email);//monikasingh8234@gmail.com
//console.log(JsUser["email"]);//monikasingh8234@gmail.com
//console.log(JsUser.mySym);//type string not symbol
//console.log(typeof JsUser[mySym]);

JsUser.email = "monikasingh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email= "monika@microsoft.com"
//console.log(JsUser.email);
//console.log(JsUser);

JsUser.greeting= function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo= function(){
    console.log(`Hello JS User , ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

