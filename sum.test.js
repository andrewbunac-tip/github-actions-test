const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

/// create another test  case that will test if the sum of 2 adn 4 is equal to 6
test('adds 2 + 4 to equal 6', () => {
    expect(sum(2,4)).toBe(5);
});

// Run npx jest --coverage to run test results and see the coverage of the test