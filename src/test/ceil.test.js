import ceil from '../ceil'

test('ceil number to up', () => {
    expect(ceil(4.006)).toBe(5)
})

test('ceil with second parameter 2 to be rounded with 2 decimals', () => {
    expect(ceil(6.004, 2)).toBe(6.01)
})

test('ceil with parameters 6040 and -2 to be 6100', () => {
    expect(ceil(6040, -2)).toBe(6100)
})

// comment to test travis