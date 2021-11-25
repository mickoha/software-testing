import eq from '../eq'

test('returns true with same object', () => {
    const object1 = {'a': 1}

    expect(eq(object1, object1)).toBeTruthy();
})

test('returns false with different values', () => {
    const object1 = {'a': 1}
    const object2 = {'a': 2}

    expect(eq(object1, object2)).toBeFalsy()
})

test('returns false with same values', () => {

    expect(eq('a', 'a')).toBeTruthy()
})

test('returns true with value and object', () => {
    const value = 'a'
    const object = Object('a')

    expect(eq(value, object)).toBeTruthy()
})

test('returns true with NaN and Nana', () => {
    expect(eq(NaN, NaN)).toBeTruthy()
})