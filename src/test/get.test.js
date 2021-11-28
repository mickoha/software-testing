import get from "../get";

test('get right product count in right size', () => {
    const shirt = {'shirt': [{'xl': {'price': 50, 'count': 10}}, {'l': {'price': 50, 'count': 5}}]}
    const countXl = get(shirt, 'shirt[0].xl.count')
    expect(countXl).toEqual(10)
})

test('return undefined on wrong path', () => {
    const shirt = {'shirt': [{'xl': {'price': 50, 'count': 10}}, {'l': {'price': 50, 'count': 5}}]}
    const countXxl = get(shirt, 'shirt[0].xll.count')
    expect(countXxl).toEqual(undefined)
})  

test('return undefined with  empty object', () => {
    const shirt = {}
    const countXxl = get(shirt, 'shirt[0].xll.count')
    expect(countXxl).toEqual(undefined)
})  