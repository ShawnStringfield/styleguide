import React from 'react';

const Avatar = function(props) {
	return (
		<span className="avatar">
			<img src={props.url} />
		</span>
	)
}

export default Avatar;
