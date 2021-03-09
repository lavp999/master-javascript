const rewire = require ("rewire");

test('Function computeAreaOfARectangle must exist', () => {
    const computeAreaOfARectangle = rewire("./app.js").__get__("computeAreaOfARectangle");
    expect(computeAreaOfARectangle).not.toBe(undefined);
});

test('Fuction must return the area of Rectangle', () => {
    const computeAreaOfARectangle = rewire('./app.js').__get__("computeAreaOfARectangle");
    
    expect(computeAreaOfARectangle(4, 8)).toBe(32)
    expect(computeAreaOfARectangle(5, 9)).toBe(45)
})

test('The function will not pass if it returns static result', () => {
    const computeAreaOfARectangle = rewire('./app.js').__get__("computeAreaOfARectangle");
    
     
    var output = computeAreaOfARectangle(5, 9)
    expect(output).not.toBe(15)
})