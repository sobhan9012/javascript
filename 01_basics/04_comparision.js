console.log(null > 0) 
console.log(null == 0) 
console.log(null >= 0) 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strictly check (check by data types).
console.log("2" == 2); // gives true
console.log("2" === 2); // gives false

/*
1.gives true because javascript automatically convert string to number in comparision (so it gives true)
2.gives false becayse here direct striclly check / comparision beten the data types so (string != number)
*/