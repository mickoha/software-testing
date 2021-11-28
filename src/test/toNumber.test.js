import toNumber from "../toNumber";


test('try to cast from object to number', () => {
    const object = Object(1)

    expect(toNumber(object)).toEqual(1)
})
test('try to cast from number to number', () => {
    const object = 1

    expect(toNumber(object)).toEqual(1)
})
test('try to cast from null to number', () => {
    const object = null

    expect(toNumber(object)).toEqual(0)
})
test('try to cast from undefined to number', () => {
    const object = undefined

    expect(toNumber(object)).toEqual(NaN)
})
test('try to cast from negative number to number', () => {
    const object = -1

    expect(toNumber(object)).toEqual(-1)
})

test('try to cast array with one number to number', () => {
    const object = [2]

    expect(toNumber(object)).toEqual(2)
})
test('try to cast array with two number to number', () => {
    const object = [2, 8]

    expect(toNumber(object)).toEqual(NaN)
})