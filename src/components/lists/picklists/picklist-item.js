import React from 'react';

const PicklistItem = function(props) {

	function getListItem(actor) {
		props.action(actor);
	}

  return (
    <li onClick={getListItem.bind(this, props)}>
			{props.avatar}
      <span>{props.listItemLabel}</span>
    </li>
  );
};

export default PicklistItem;
