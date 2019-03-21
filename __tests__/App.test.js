import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('unit tests', () => {
	it('should mount', () => {
		const wrapper = shallow(<App />);
	});
});
