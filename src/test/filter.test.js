import filter from "../filter";

test('returns list of 1with price of 50', () => {
    const products = [{product: 'shirt', price: 50}, {product: 'shorts', price: 20}]
    expect(filter(products, ({price}) => price === 50)).toEqual([{price: 50, product: 'shirt'}])
})

test('returns list of two with price of 50', () => {
    const products = [{product: 'shirt', price: 50}, {product: 'shorts', price: 50}]
    expect(filter(products, ({price}) => price === 50)).toEqual([{price: 50, product: 'shirt'}, {price: 50, product: 'shorts'}])
})