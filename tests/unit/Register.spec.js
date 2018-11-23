import React from 'react';
import { shallow } from 'enzyme';
import './setupTests';
import Register from '../../src/components/Register/Register';

describe('Register Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Register />);
  });

  it('should render the Register component', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have 5 input fields', () => {
    const inputFields = wrapper.find('input');
    expect(inputFields.length).toEqual(5);
  });
});
