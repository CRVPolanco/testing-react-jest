import React from 'react';
import { mount, shallow } from 'enzyme';
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
