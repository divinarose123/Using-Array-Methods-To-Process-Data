// 1. What is the average price of all items?
var sumTotal= items.reduce(function(a, b) {
    return a + b.price
}, 0)
var avg = sumTotal / items.length
document.querySelector('#answer1').innerHTML = `The average price is $${avg}`


//2 Show me an array of items that cost between $14.00 and $18.00 USD?
    var itemsOfArray= items.filter(function(item)  {
        return item.price > 14 && item.price < 18
    })
   var arrayBetweenItems= itemsOfArray.map(function(cost) {
    return `<p>${cost.title}</p>`

   }).join('')
   document.querySelector('#answer2').innerHTML = `${arrayBetweenItems}`

   //3 Which item has a "GBP" currency code? Display it's name and price.
   
var currencyCodeName = items.filter(function(item) {
    return item.currency_code === "GBP"
})

var gbpPriceName = currencyCodeName.map(function(item)  {
    return  `${item.title} cost ${item.price} pounds `
}).join('')
document.querySelector('#answer3').innerHTML = `${gbpPriceName}`

//4 Display a list of all items who are made of wood.

var madeOfWood = items.filter(function(item) {
    return item.materials.includes("wood")
})
var woodChuckPrice = madeOfWood.map(function(materials)  {
    return `<p>${materials.title} is made of wood</p>`
}).join('')
console.log(madeOfWood)
document.querySelector('#answer4').innerHTML=`${woodChuckPrice}`

//5 Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

var eightOrMore = items.filter(function(materials)  {
    return materials.title,includes("")
})



