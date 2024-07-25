//const tinderUser =new Object()//singleton object
const tinderUser={}
tinderUser.id ="123abc"
tinderUser.name ="Sammy"
tinderUser.isloggedIn =false

//console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Monika",
            lastname:"Singh"
        }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 ={1:"a" ,2:"b"}
const obj2 ={3:"a" ,4:"b"}
const obj4 ={5:"a" ,6:"b"}
//const obj3={obj1,obj2}

//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 ={...obj1, ...obj2}
console.log(obj3);

const users =[
    {
        id:1,
        email:"h@gmai.com"
    },
    {
        id:2,
        email:"h@gmai.com"
    },{
        id:3,
        email:"h@gmai.com"
    }
]

users[1].email
//console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isloggedIn: false }
//console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isloggedIn' ]
//console.log(Object.values(tinderUser));//[ '123abc', 'Sammy', false ]
//console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isloggedIn', false ] ]

//console.log(tinderUser.hasOwnProperty('isloggedIn')); //true

const course={
    coursename :"js",
    price: 999,
    courseInstructor:"monika"

}

const{courseInstructor:instructor} =course
console.log(instructor);

//JSON API
{
    "coursename" :"js",
    "price" : 999,
    "courseInstructor":"monika"

}


