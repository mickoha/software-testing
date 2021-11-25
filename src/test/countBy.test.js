import countBy from "../countBy";

test('test countBy with collection size 0', () => {
    const items = []
    const counted = countBy(items)

    expect(counted).toEqual({});
})

test('test countBy with collection size 1', () => {
    const items = [{user: 'barney', active: true}, {user: 'betty', active: true}, {user: 'fred', active: 'false'}]
    const counted = countBy(items, value => value.active)

    expect(counted).toEqual({true: 2, false: 1});
})
