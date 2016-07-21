import React from 'react';
import $ from 'jquery';
import PicklistItem from './picklist-item';
import ButtonDropdown from '../../buttons/btn_dropdown';

const Picklist = React.createClass ({

	getInitialState() {
		return {}
	},

	componentDidMount() {
		$(document).on('click', function(event) {
			if (!$(event.target).closest('.picklist').length) {
				console.log( 'Please Handle This' );
			}
		}.bind(this));
	},

	popularActors() {
		return this.props.popularActors.map( (popularActor, n) => {
	    return (
	      <PicklistItem
	        key={popularActor.id}
	        imgurl={this.props.imgurl}
	        popularActor={popularActor} />
	    );
	  });
	},

	render() {
		console.log( this.popularActors() );
		return (
			<span className="picklist">

				<ButtonDropdown
					buttonText={this.props.selected}
					actionIcon={this.props.actionIcon}
					action={this.props.action} />

				<ul className={'actors dropdown ' + this.props.toggleState}>
					{this.popularActors()}
				</ul>

			</span>
		);
	}
});

export default Picklist;
