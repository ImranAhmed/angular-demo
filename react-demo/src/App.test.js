import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should contain container class as first element', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('div')).toMatchSelector('.container');
  expect(wrapper.find('div')).toMatchSelector('.mt-5');
});

it('should contain h1 element', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('h1')).toExist();
});

it(`should contain page title 'Rest App'`, () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('h1')).toHaveText('Rest App');
});

describe('user table', () => {
  it('should contain table of users', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('table.table.mt-5')).toExist();
  });

  it('should contain table headers', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('table > thead > tr > th').length).toBe(3);
  });

  it('should contain name table header', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('table > thead > tr > th').first(1)).toHaveText('Name');
  });

  it('should contain email table header', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('table > thead > tr > th').at(1)).toHaveText('Email');
  });

  it('should contain identity table header', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('table > thead > tr > th').at(2)).toHaveText('Identity');
  });
});