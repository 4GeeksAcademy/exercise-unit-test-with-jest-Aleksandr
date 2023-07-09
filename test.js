// import the function sum from the app.js file

// start your first test
test('adds 14 + 9 to equal 23', () => {
    const {sum} = require('./app.js');
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("35 dollars should be 3,730.416 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(35)

    // if 1 dollar is 106.583 yens, then 35 dollars should be (35 * 106.583)
    const expected = 35 * 106.583; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(35)).toBe(3730.416666666667); 
})
test("3.5 pounds should be 559.5625 yens", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(3.5)

    // if 1 pound is 159.875 yens, then 3.5 pounds should be (3.5 * 159.875)
    const expected = 3.5 * 159.875; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(559.5625); 
})