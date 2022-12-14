const rewire = require ("rewire");
const isPersonOldEnoughToDrinkAndDrive = rewire("./app.js").__get__("isPersonOldEnoughToDrinkAndDrive");

test('Function isPersonOldEnoughToDrinkAndDrive must exist', () => {
    expect(isPersonOldEnoughToDrinkAndDrive).not.toBe(undefined);
});

test('Function isPersonOldEnoughToDrinkAndDrive must return something', () => {
    expect(isPersonOldEnoughToDrinkAndDrive({})).not.toBe(undefined);
});

test ('Function should return a false if age less than 21', () => {
    expect(isPersonOldEnoughToDrinkAndDrive({ age: 20 })).toBe(false);
})
test ('Function should return a true if age greater than or equal than 21', () => {
    expect(isPersonOldEnoughToDrinkAndDrive({ age: 21 })).toBe(true);
    
})
test ('Function should return a true if age greater than or equal than 23', () => {
    expect(isPersonOldEnoughToDrinkAndDrive({ age: 23 })).toBe(true);
    
})
