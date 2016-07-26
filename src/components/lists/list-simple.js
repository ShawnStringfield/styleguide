import React from 'react';

const SimpleList = function(props) {
	var list = props.listData.limitTo(props.limit).map( (item) => {
		if (item) {
			return (
				<li key={item.id}>{item.label}</li>
			)
		}
	});

	return (
		<ul className="list">
			{list}
		</ul>
	)
}

export default SimpleList;
