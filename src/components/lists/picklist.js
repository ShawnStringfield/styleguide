import React from 'react';
import PicklistItem from './picklist-item';
import ButtonDropdown from '../buttons/btn_dropdown';
import Avatar from '../images/avatar';

const Picklist = React.createClass ({

	getInitialState() {
		return {
			toggleState: false,
			picklistButtonText: 'Select'
		};
	},

	setToggleState() {
		this.setState({toggleState: !this.state.toggleState});
	},

	handleListItem(item) {
		this.setToggleState();
		this.props.action(item);
		this.setState({picklistButtonText: item.listItemLabel});
	},

	getListitems() {
		const list = this.props.listData;
		return list.limitTo(5).map( (item) => {
			if (item) {
				return (
					<PicklistItem
						key={item.id}
						action={this.handleListItem}
						listItemKey={item.id}
						avatar={<Avatar url={item.pic} />}
						listItemLabel={item.label} />
				);
			}
		});
	},

	render() {
		const classToggle = this.state.toggleState === true ?
			'on': 'off';

		const actionIcon = this.state.toggleState === false ?
			'keyboard_arrow_down' : 'keyboard_arrow_up';

		return (
			<span className="picklist">
				<span className="pick-list-container">
					<ButtonDropdown
						buttonText={this.state.picklistButtonText}
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
