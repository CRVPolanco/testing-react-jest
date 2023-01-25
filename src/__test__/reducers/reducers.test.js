import initialState from "../../initialState";
import reducer from "../../reducers";
import ProductMock from '../../__mocks__/ProductMock';

describe('tests for reducers', () => {
  test('get initialState', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('add to cart test on the reducer', () => {
    const initialState = { cart: [] };
    const payload = ProductMock;
    const action = { type: 'ADD_TO_CART', payload };
    const expected = { cart: [ ProductMock ] };
    expect(reducer(initialState, action)).toEqual(expected);
  });
  test('remove from cart on the reducer', () => {
    const initialState = { cart: [ ProductMock ] };
    const payload = ProductMock;
    const action = { type: 'REMOVE_FROM_CART', payload };
    const expected = { cart: [] };
    expect(reducer(initialState, action)).toEqual(expected);
  })
});
