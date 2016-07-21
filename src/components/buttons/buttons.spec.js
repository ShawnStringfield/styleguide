import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Buttons from './buttons';

const props = {
	buttonText: {},
	className: {}
};

describe('<Button />', function() {
	it('should contain text', function() {
		const wrapper = shallow(<Buttons {...props} />);
		const expected = wrapper.find('Button').at(0).prop('buttonText');
		expect(expected).length.to.equal('Default Button');
	});
});
