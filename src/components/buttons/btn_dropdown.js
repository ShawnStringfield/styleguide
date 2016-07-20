import React from 'react';
import Button from './btn_base';
import ButtonAction from './btn_action';

const ButtonDropdown = (props) => {
  return (
    <div className="btn-group">
      <Button className="btn btn-primary" buttonText={props.buttonText} />
      <ButtonAction actionIcon={props.actionIcon} />
    </div>
  );
};

export default ButtonDropdown;
