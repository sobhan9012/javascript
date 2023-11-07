//Arrays

const myarr = [0 ,1 , 2, 3]

console.log(myarr [0]);

const myheros = ["hiiisaktiman","hiitony"]

console.log(myheros[0]);

// arrays methods

myarr.push(6) 
console.log(myarr)

myarr.pop()
console.log(myarr);

myarr.unshift(4) // push into 1st position
console.log(myarr)

myarr.shift() //same as pop but delete from 0th position
console.log(myarr)

const newarr = myarr.join()

console.log(myarr)
console.log(newarr)
console.log(typeof newarr) // string

// slice , spalice

console.group("A" , myarr)

const myn1 = myarr.slice(1,3)
console.log(myn1);

