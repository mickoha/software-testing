import isObject from '../isObject'

test('returns true with object', () => {
    const object = {}

    expect(isObject(object)).toBeTruthy()
})

test('returns false with string', () => {
    const object = 'broke'

    expect(isObject(object)).toBeFalsy()
})

test('returns true with empty array', () => {
    const object = []

    expect(isObject(object)).toBeTruthy()
})