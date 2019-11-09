import { mount } from 'enzyme';
import React from 'react';

import IsLoading from './IsLoading';

describe('IsLoading', () => {
    it('should contain spinner', () => {
        const wrapper = mount(<IsLoading />);
        expect(wrapper.find('div').first()).toMatchSelector('.spinner-border');
    });

});