import React from 'react';
import PicklistItem from './picklist-item';
import ButtonDropdown from '../../buttons/btn_dropdown';

const Picklist = (props) => {
  let actors = props.actors.map( (actor, n) => {
    while (n < 7) {
      return (
        <PicklistItem
          key={actor.id}
          imgurl={props.imgurl}
          actor={actor} />
      );
    }
  });

  return (
    <div className="picklist">
      <ButtonDropdown />
      <ul className="actors dropdown">
        {actors}
      </ul>
    </div>
  );
};

export default Picklist;
