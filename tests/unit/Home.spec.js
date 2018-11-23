import React from 'react';
import { shallow } from 'enzyme';
import './setupTests';
import Home from '../../src/components/Home/Home';

describe('Home component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should render the component without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have 2 buttons', () => {
    const buttons = wrapper.find('button');
    expect(buttons.length).toEqual(2);
  });
});
