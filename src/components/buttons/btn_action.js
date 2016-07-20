import React from 'react';

const ButtonAction = (props) => {
  return (
    <button className="btn btn-primary btn-action">
      <i className="material-icons">{props.actionIcon}</i>
    </button>
  )
}

export default ButtonAction;
