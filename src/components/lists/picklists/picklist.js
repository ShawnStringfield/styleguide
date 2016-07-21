import React from 'react';
import PicklistItem from './picklist-item';
import ButtonDropdown from '../../buttons/btn_dropdown';

const Picklist = (props) => {
  const popularActors = props.popularActors.map( (popularActor, n) => {
    while (n < 5) {
      return (
        <PicklistItem
          key={popularActor.id}
          imgurl={props.imgurl}
          popularActor={popularActor} />
      );
    }
  });

  return (
    <span className="picklist">

      <ButtonDropdown
				buttonText={props.selected}
				actionIcon={props.actionIcon}
				action={props.action} />

      <ul className={'actors dropdown ' + props.toggleState}>
        {popularActors}
      </ul>

    </span>
  );
};

export default Picklist;
