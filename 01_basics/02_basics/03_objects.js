// single ton

// object literals

const mySym = Symbol("key1")

const jsuser = {
    name: "sobhan",
    [mySym]: "mykey1", //assess the symbol
    age: 18,
    eamil:"sobhan@gamil.com",
    isloggedin: false,
    lastlogin:["monday", "yesterday"]

}

// console.log(jsuser.eamil) 
// console.log(jsuser["eamil"])  //defferent printing style  
// console.log(jsuser[mySym]) // assess the symbol


jsuser.eamil = "sobhann@gamil.com"
// Object.freeze(jsuser) //freeze any oobject after that what u ever to want to change it does not going to bechange
jsuser.eamil = "sobhannn@gamil.com"

// console.log(jsuser);

jsuser.greeting = function() {
    console.log("hello js user")

}
console.log(jsuser.greeting())
console.log(jsuser.greeting) // function anonymouus
