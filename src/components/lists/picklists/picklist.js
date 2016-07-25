import React from 'react';
import PicklistItem from './picklist-item';
import ButtonDropdown from '../../buttons/btn_dropdown';
import Avatar from '../../images/avatar';

const Picklist = React.createClass ({

	getInitialState() {
		return {
			toggleState: false
		};
	},

	setToggleState() {
		this.setState({toggleState: !this.state.toggleState});
	},

	getAvatarUrl(url) {
		return this.props.baseUrlPathForAvatar ?
			this.props.baseUrlPathForAvatar + url : url;
	},

	handleListItem(item) {
		this.props.action(item);
	},

	getListitems() {
		// Check for list type and serve the needed list
		console.log( this.props.listType );
		return this.props.listData.map( (item) => {
			return (
				<PicklistItem
					key={item.id}
					action={this.handleListItem}
					listItemKey={item.id}
					avatar={<Avatar url={this.getAvatarUrl(item.pic)} />}
					listItemLabel={item.label} />
			);
		});
	},

	render() {
		const classToggle = this.state.toggleState === true ? 'on': 'off';
		const actionIcon = this.state.toggleState === false ? 'keyboard_arrow_down' : 'keyboard_arrow_up';

		return (
			<span className="picklist">

				<span className="pick-list-container">
					<ButtonDropdown
						buttonText="Selected"
						actionIcon={actionIcon}
						action={this.setToggleState} />

					<ul className={'actors dropdown ' + classToggle}>
						{this.getListitems()}
					</ul>
				</span>

				<div onClick={this.setToggleState} className={'backdrop ' + classToggle}></div>
			</span>
		);
	}
});

export default Picklist;
