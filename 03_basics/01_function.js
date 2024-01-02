function saymyname() {
    console.log("s");
    console.log("o");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("n");
}

// saymyname();

function addTwonumbers(number1,number2) {
    let result = number1 + number2
    return result;
}

let result = addTwonumbers(3,"a");//3a
// console.log(result)

function loginusername(username = "sam") { 
    //sam is a default value if in arugument i could change something  then it is overriing in this case and change this name
    // if(username === undefined) {
    //     console.log("please enter a username!");
    //     return;
    // }
    if(!username) { //same meaning as previous one
        console.log("please enter a username!");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginusername());
// console.log(loginusername("sobhan"));

function calculateCartPrice(...num1) {
    //here the meaning of "..." rest operator or speraid operator
    return num1;
}

// console.log(calculateCartPrice(200,400,500));
/* here we in function we take the only one parameter and passed many value(noramlly it did not work). 
so here we use sparaid operator in parameter so after that what even we passed argument it is passed 
in real time.
*/

const user = {
    username : "sobhan",
    price : 29
}

function hadelobject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// hadelobject(user)


/*here we pass direct object also*/
hadelobject({
    username:"silicon bakbas",
    price: 1
})

/*here we pass direct arrays also*/

const mynewArray = [200,400,500,700]

function returnsecondvalue(getArray) {
    return getArray[1]
}

console.log(returnsecondvalue(mynewArray));