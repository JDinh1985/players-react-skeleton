import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../src/components/Home/Home';

// test('it should add 1 + 2 equals 3', () => {
//   expect(Home(1, 2)).toBe(3);
// });

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
