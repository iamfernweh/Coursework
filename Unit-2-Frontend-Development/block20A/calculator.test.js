const calc = require('./calculator');

describe('calculator add function', () => { 
    test('adding 1+1 equals 2', () => { 
        const result = calc.add(1,1)
        expect(result).toBe(2)
     }) 
})