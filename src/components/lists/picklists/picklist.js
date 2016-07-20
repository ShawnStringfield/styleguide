import React from 'react';
import PicklistItem from './picklist-item';
import ButtonDropdown from '../../buttons/btn_dropdown';

const Picklist = (props) => {
  let popularActors = props.popularActors.map( (popularActor, n) => {
    while (n < 7) {
      return (
        <PicklistItem
          key={popularActor.id}
          imgurl={props.imgurl}
          popularActor={popularActor} />
      );
    }
  });

  return (
    <div className="picklist">
      <ButtonDropdown buttonText="Select" actionIcon="keyboard_arrow_down" />
      <ul className="actors dropdown">
        {popularActors}
      </ul>
    </div>
  );
};

export default Picklist;
