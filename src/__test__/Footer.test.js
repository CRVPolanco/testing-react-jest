import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../components/Footer';

describe('footer test', () => {
  const footer = shallow(<Footer />);

  test('footer test start', () => {
    expect(footer.length).toEqual(1);
  });
  test('title render', () => {
    expect(footer.find(".Footer-title").first().text()).toEqual("Kajlo Store");
  })
});

describe('footer snapshot', () => {
  test('check component ui if does not change ', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  })
});
