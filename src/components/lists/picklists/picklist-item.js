import React from 'react';

const PicklistItem = (props) => {
  return (
    <li>
      <span className="avatar"><img src={props.imgurl + props.actor.profile_path} alt=""/></span>
      <span className="actor_name">{props.actor.name}</span>
    </li>
  );
};

export default PicklistItem;
