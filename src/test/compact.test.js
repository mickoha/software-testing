import compact from "../compact";

// The compact functon return very wierd array here
test('remove falsey values from array', () => {
    const array = [0, 1, false, 2, '', 3]
    const filteredArray = compact(array)

    const res = [1, 2, 3]
    console.log(res) //  [ 1, 2, 3 ]

    console.log(filteredArray) //  [ 2, 3, '-1': 1 ]


    expect(filteredArray).toEqual(res);
})