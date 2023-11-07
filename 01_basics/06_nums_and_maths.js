const score = 400
console.log(score)

const balance  = new Number(100) // explicit type of convesion (explicit to type of number)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(12))

const otherNum = 123.8966
console.log(otherNum.toPrecision(3))

const hun = 10000000
console.log(hun.toLocaleString())
console.log(hun.toLocaleString('en-IN')) //indian types

// ++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log((Math.abs(-4))) //negetive to posetive
console.log((Math.round(4.6))) // provide round value
console.log(Math.ceil(4.6)) // highest possible decimal value
console.log(Math.floor(4.9)) // lowest possible decimal value
console.log(Math.min(2,2,4,5))
console.log(Math.max(2,2,4,5))

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);