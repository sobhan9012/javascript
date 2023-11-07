var c = 300 //this is a global code
let a = 300;
if(true) {         // 
    let a = 10     // 
    const b = 20   //   this is a block of code 
    // var c = 30  // 
    // console.log("inner :", a);
}                 

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username ="sobhan"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //it is wrong because it is not asccessable it is under the function two an we call in function one

    two();
}

// one();

if(true) {
    const username = "sobhan"
    if(username === "sobhan") {
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website); //using scope concept
}

// console.log(username); //used scope concept