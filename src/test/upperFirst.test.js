import upperFirst from "../upperFirst";

test('return string with upper first letter', () => {
    const sentence = 'interesting course'

    expect(upperFirst(sentence)).toEqual('Interesting course')
})

test('return same string with upper letter', () => {
    const sentence = 'Interesting course'

    expect(upperFirst(sentence)).toEqual(sentence)
})

test('return same string with all letters to be upper', () => {
    const sentence = 'INTERESTING COURSE'

    expect(upperFirst(sentence)).toEqual(sentence)
})