import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


describe('app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should contain container class as first element', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('div').first()).toMatchSelector('.container');
    expect(wrapper.find('div').first()).toMatchSelector('.mt-5');
  });

  it('should contain h1 element', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('h1')).toExist();
  });

  it(`should contain page title 'Rest App'`, () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('h1')).toHaveText('Rest App');
  });

});