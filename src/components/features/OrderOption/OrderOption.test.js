import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type='dropdown' name='contact' /> );
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should display prop "name" in title', () => {
    const component = shallow(<OrderOption  type='dropdown' name='contact' />);
    expect(component.find('.title').text()).toEqual('contact');
  });
  
});
