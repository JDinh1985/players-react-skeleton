import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('renders the Home component', () => {
    expect(wrapper).toBeTruthy();
  });
});
