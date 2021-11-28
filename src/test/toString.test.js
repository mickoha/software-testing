import toString from "../toString";

test('try to cast from object to string', () => {
    const object = Object('testing')

    expect(toString(object)).toEqual('testing')
})
test('try to cast from string to string', () => {
    const object = 'testing'

    expect(toString(object)).toEqual('testing')
})
test('try to cast from null to string', () => {
    const object = null

    expect(toString(object)).toEqual('null')
})
test('try to cast from undefined to string', () => {
    const object = undefined

    expect(toString(object)).toEqual('undefined')
})

test('try to cast array with one string to string', () => {
    const object = ['testing']

    expect(toString(object)).toEqual('testing')
})
test('try to cast array with two string to string', () => {
    const object = ['testing', 'today']

    expect(toString(object)).toEqual('testing,today')
})
test('try to cast array with random values to string', () => {
    const object = ['testing', 'today', 1, null]

    expect(toString(object)).toEqual('testing,today,1,')
})
