import React from 'react';

const ButtonBase = (props) => {
  return(
    <button className="btn btn-primary">{props.buttonText}</button>
  );
};

export default ButtonBase;
