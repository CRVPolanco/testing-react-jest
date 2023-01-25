import React from "react";
import { mount, shallow } from 'enzyme';
import ProviderMock from "../__mocks__/ProviderMock";
import ProductMock from '../__mocks__/ProductMock';
import Product from '../components/Product';

describe('tests for Product', () => {
  test('component should be rendered', () => {
    const product = shallow(<ProviderMock><Product /></ProviderMock>,);
    expect(product.length).toEqual(1);
  });
  test('component should show if the button was clicked', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>,
    );
    wrapper.find("button").simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  })
});
