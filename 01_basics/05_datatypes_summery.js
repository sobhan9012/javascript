/*based on storing memory and asses memory devide into 2 types ->primitive
                                                               ->non-primitive(reference type)

 # primitive ->it call by value(when u copy anything from where to where the reference of original data has not be given .
->only copied data has been given or what u has been change it is only in copid versiion)

 #   7 types : String,Number,Boolean,null,undefined,BigInt and 2 types symbol

 # non-premitive (reference type) ->given direct reference of the memory to allocate

 Array , Objects , Function

 
//  is javascript is dynamically or static type of language 


JavaScript is a dynamically typed language. It means that JS does not require the explicit declaration of the variables before they’re used.
For example :
In JAVA (Statically typed language)
String name; //Variable have types
name = “Ali”; //Values have types

name = 2; (not possible) //variable cannot change type

In JAVASCRIPT (Dynamically typed language)
var name; //Variable have no types
name = “Ali”; //Values have types

name = 2; //variable change type dynamically
 */

// const score =100
// const scoracalue = 100.3
// const isLoggedin = false
// const outsidetemp = null
// let usermail;

// const id = Symbol('123')
// const anathorid = Symbol('123')

// console.log(id === anathorid)

// const bignumber = 3456789125748665423156n


// const heros = ["saktiman", "naagraj", "doga"]

// let myobj = {

//     name:"sobhan",
//     age:18

// }

// const myfunction = function() {

//     console.log("hello world")

// }

// console.log(typeof bignumber);

// console.log(typeof outsidetemp);

// console.log(typeof myfunction) //type is actuall function-object

//all nonpremitive data types typeof is object


//++++++++++++++++++++++++++++++++++++++++++**************++++++++++++++++

//stack (Premitive) , heap(non - premetive)

let myyoutubename = "sobhansahoo.com"

let anothername = myyoutubename

anothername = "chae or code"

console.log(myyoutubename);
console.log(anothername);


let userone = {
    email:"user@google.com",
    upi:"lop@upi.com"
}

let usertwo = userone
usertwo.email = "user2@gamil.com"

console.log(userone.email);
console.log(usertwo.email);