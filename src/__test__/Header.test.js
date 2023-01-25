import React from "react";
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
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
  });
});

describe('snapshot for header', () => {
  test('check snapshot of the header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
