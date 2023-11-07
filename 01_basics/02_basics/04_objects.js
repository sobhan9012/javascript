const oyouser = new Object() // single-ton object

// console.log(oyouser) //empty object {} --> non singleton object

const Oyouser = {}

// console.log(Oyouser) //empty object {}

Oyouser.id = "123bc"
Oyouser.name = "sobhan"
Oyouser.isuserloggedin = false

// console.log(Oyouser)

const regularuser = {
    email:"sobhansahoo@gamil.com",
    fullname: {
        userfullname : {
            firstname :"sobhan",
            lastname : "sahoo"
        }
    }
}

// console.log(regularuser);

const obj1 = {1 : "a" , 2: "b"}
const obj2 = {3 : "b" , 4: "a"}

// const obj3 = {obj1 , obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1 , obj2) // {} --> target, obj1,obj2 -- >sorce

const obj3  = {...obj1,...obj2}
// console.log(obj3)

const user = [

    {
        id1 : 1,
        email:"sobhansahoo@gamil.com"
    },
    {
        id1 : 1,
        email:"sobhansahoo@gamil.com"
    },
    {
        id1 : 1,
        email:"sobhansahoo@gamil.com"
    }
]

user[1].email
// console.log(oyouser);


// ---------------------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX------------------------
//objct desertucturing

const course = {
    coursename:"js in hindi"
    ,price :"999",
    courseinstructor:"hittesh choudry"  
}

// course.courseinstructor

const {courseinstructor : instructor} = course //this is a different way here you can see we can coustmize the name also.

// console.log(courseinstructor);
console.log(instructor);

/* now a time the the values form arriving from backend in like json format (it is actually shows like object type) so how it goes like 

{
    name:"hitesh",
    coursename:"js in hindi",
    price:"free"
}

in object we hava a name but here we dont see any name so it is a json.after that json stores in a variable.but 
here keys are also store in a double cout .


json are many time show in array format. 

[
    {},
    {},
    {}
]
*/