import React from 'react';
import Button from './btn_base';
import ButtonAction from './btn_action';

const ButtonDropdown = () => {
  return (
    <div className="btn-group">
      <Button buttonText="Select Actor" />
      <ButtonAction />
    </div>
  )
}

export default ButtonDropdown;
