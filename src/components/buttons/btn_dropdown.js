import React from 'react';
import Button from './btn_base';

const ButtonDropdown = () => {
  return (
    <div className="btn-group">
      <Button buttonText="Select Actor" />
      <ButtonDropdown />
    </div>
  )
}

export default ButtonDropdown;
