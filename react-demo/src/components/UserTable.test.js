import { mount } from 'enzyme';
import React from 'react';

import UserTable from './UserTable';

describe('user table', () => {
    const users = [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name":
                "George",
            "last_name": "Bluth",
            "avatar": "https://image"
        }
    ]

    it('should contain table of users', () => {
        const wrapper = mount(<UserTable data={{ users }} />);
        expect(wrapper.find('table.table.mt-5')).toExist();
    });

    it('should contain table headers', () => {
        const wrapper = mount(<UserTable data={{ users }} />);
        expect(wrapper.find('table > thead > tr > th').length).toBe(4);
    });

    it('should contain name table header', () => {
        const wrapper = mount(<UserTable data={{ users }} />);
        expect(wrapper.find('table > thead > tr > th').first(1)).toHaveText('Name');
    });

    it('should contain email table header', () => {
        const wrapper = mount(<UserTable data={{ users }} />);
        expect(wrapper.find('table > thead > tr > th').at(1)).toHaveText('Email');
    });

    it('should contain identity table header', () => {
        const wrapper = mount(<UserTable data={{ users }} />);
        expect(wrapper.find('table > thead > tr > th').at(2)).toHaveText('Identity');
    });

    it('should contain actions table header', () => {
        const wrapper = mount(<UserTable data={{ users }} />);
        expect(wrapper.find('table > thead > tr > th').at(3)).toHaveText('Actions');
    });
});