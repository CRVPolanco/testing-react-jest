import React from "react";
import { mount, shallow } from 'enzyme';
import ProviderMock from "../__mocks__/ProviderMock";
import Header from "../components/Header";

describe('test for header', () => {

  test('test to know if is the component has been rendered', () => {
    const header = shallow(<ProviderMock><Header/></ProviderMock>);
    expect(header.length).toEqual(1);
  });
  test('test to know if the title of the component was rendered', () => {
    const header = mount(<ProviderMock><Header/></ProviderMock>);
    expect(header.find(".Header-title").text()).toEqual('Kajlo Store');
  })
});
