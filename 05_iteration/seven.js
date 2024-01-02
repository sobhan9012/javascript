const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
                .filter((num) => num <= 95 )
                //this called _chaining_ beacause we add map function after that agian map function and add filter function and this sis possible .

console.log(newNums);