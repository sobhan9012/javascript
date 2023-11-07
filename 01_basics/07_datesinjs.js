//Dates

let myDate = new Date()
console.log(myDate); //2023-10-01T10:25:15.910Z
console.log(myDate.toString()); //Sun Oct 01 2023 15:55:15 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); //2023-10-01T10:25:15.910Z
// console.log(myDate.getTime());
// console.log(myDate.toJSON());
// console.log(myDate.getUTCFullYear());
// console.log(myDate.getDate());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let mycreatedDate = new Date("2023-01-23")
console.log(mycreatedDate.toLocaleString());

let myTimestap = Date.now()

console.log(myTimestap) // in mili second
console.log(mycreatedDate.getTime()) // same

console.log(Math.floor(Date.now()/1000)) //in second

let newDATE = new Date()
console.log(newDATE)
console.log(newDATE.getMonth() + 1)
console.log(newDATE.getDay()+1)


newDATE.toLocaleString('default', {  //u can coustomize this thing
    weekday : "long"
})