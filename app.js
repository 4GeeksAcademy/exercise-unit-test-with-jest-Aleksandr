// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen = (a) => {
    return (oneEuroIs.JPY/oneEuroIs.USD)*a
}
const fromEuroToDollar = (b) => {
    return oneEuroIs.USD*b
}
const fromYenToPound = (c) => {
    return (oneEuroIs.JPY/oneEuroIs.GBP)*c
}
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound}