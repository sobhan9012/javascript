const mynum =[1,2,3]

const mytotal = mynum.reduce(function (accumulator,curentvalue) {
    console.log(`accumulator: ${accumulator} and currentvalue: ${curentvalue}`)
    return accumulator + curentvalue
},0)

const mytotals = mynum.reduce(function (accumulator,curentvalue) {
    console.log(`accumulator: ${accumulator} and currentvalue: ${curentvalue}`)
    return accumulator + curentvalue
},10)

console.log(mytotal );
console.log(mytotals );

const mytotalnum = mynum.reduce( (acc,curr) =>  acc+curr, 0)

console.log(mytotalnum);


const shoopingcart = [
    {
        itemname :"js course",
        price :299
    },
    {
        itemname :"py course",
        price :2999
    },
    {
        itemname :"ch course",
        price :999
    },
    {
        itemname :"java course",
        price :9999
    },
    {
        itemname :"c++ course",
        price :5999
    }
]

const pricetopay = shoopingcart.reduce((acc,item) => acc + item.price,0)

console.log(pricetopay);