import { mount } from 'enzyme';
import React from 'react';

import IsLoading from './IsLoading';

describe('IsLoading', () => {

    it('should contain a single div', () => {
        const wrapper = mount(<IsLoading />);
        expect(wrapper.find('div').length).toBe(1);
    });

    it('should contain div with spinner class', () => {
        const wrapper = mount(<IsLoading />);
        expect(wrapper.find('div').first()).toMatchSelector('.spinner-border');
    });

    it('should contain div with role attribute', () => {
        const wrapper = mount(<IsLoading />);
        expect(wrapper.find('div[role="status"]')).toExist();;
    });
});
