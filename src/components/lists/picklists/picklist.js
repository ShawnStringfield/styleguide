import React from 'react';
import PicklistItem from './picklist-item';
import Button from '../../buttons/btn_base';

const Picklist = (props) => {
  let actors = props.actors.map( (actor, n) => {
    while (n < 5) {
      return (
        <PicklistItem
          key={actor.id}
          imgurl={props.imgurl}
          actor={actor} />
      )
    }
  });

  return (
    <div>
      <Button />
      <ul className="actors dropdown">
        {actors}
      </ul>
    </div>
  );
};

export default Picklist;
