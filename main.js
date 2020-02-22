// 1.

var sumTotal = 0

var sumTotal= items.reduce(function(a, b) {
    return a + b.price
}, 0)


var avg = sumTotal / items.length

document.querySelector('#answer1').innerHTML = avg





