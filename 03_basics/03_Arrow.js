const user = {
    username: "sobhan",
    price:999,

    welcomemessage : function() {
        console.log(`${this.username}, welcome to werbsite`);
        console.log(this);
    }
}

user.welcomemessage()
user.username = "raj"
user.welcomemessage()

console.log(this);

function hello() {
    let username = "sobhan sahoo"
    // console.log(this.username); // show as undefined because it works only in object not in function
    // console.log(this)
}

// hello();

// const chai = function () {
//     let username = "sobhan sahoo"
//     console.log(this.username); //it refers to undefined
// }

// chai()

const chai = () => { //it is called arrow function
    let username = "sobhan sahoo"
    console.log(this.username); //it refers to undefined
}

// chai()

const addTwo = (num1,num2) => {
    return num1 + num2;
}

// const addtwo = (num1,num2) => (num1 + num2)

const addtwo = (num1,num2) => num1 + num2

// console.log(addTwo(3,4));
console.log(addtwo(3,4));