import $ from 'jquery';
const el = '.picklist'

$(document).on('click', function(event) {
	if (!$(event.target).closest(el).length) {
		console.log( event );
		return true;
		// this.setState({toggleState: false});
	}
}.bind(this));

const helpers = {}

export default helpers;
