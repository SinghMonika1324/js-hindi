//Dates

let myDate = new Date()
//console.log(myDate.toString()); //Sun Jul 21 2024 15:06:30 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toTimeString()); //15:08:10 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString()); //Sun Jul 21 2024
//console.log(myDate.toISOString());//2024-07-21T15:10:11.482Z
//console.log(myDate.toJSON());//2024-07-21T15:11:49.413Z
//console.log(myDate.toLocaleString()); //7/21/2024, 3:12:52 PM
//console.log(myDate.toUTCString()); //Sun, 21 Jul 2024 15:14:31 GMT

//let myCreatedDate = new Date(2023 , 0 , 23, 5 ,3)
let myCreatedDate = new Date("2023-01-23")
//console.log(myCreatedDate.toLocaleString());
//console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023
//console.log(myCreatedDate.toLocaleString()); //1/23/2023, 5:03:00 AM

let myTimeStamp = Date.now()
//console.log(myTimeStamp); //1721581950153 time in milliseconds
//console.log(myCreatedDate.getDate());// 23-date in number
//console.log(myCreatedDate.getDay()); // 1
//console.log(myCreatedDate.getTime()); //time in milli seconds
//console.log(myDate.getDay());

//console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth()+1);  //current month
//console.log(newDate.getDay());

newDate.toLocaleString('default' ,{
    weekday:"long"
})







