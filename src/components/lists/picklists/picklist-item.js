import React from 'react';

const PicklistItem = (props) => {
  return (
    <li>
      <span className="avatar"><img src={props.imgurl + props.popularActor.profile_path} alt=""/></span>
      <span className="actor_name">{props.popularActor.name}</span>
    </li>
  );
};

export default PicklistItem;
