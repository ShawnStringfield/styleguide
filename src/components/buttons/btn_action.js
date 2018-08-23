import React from 'react'

const ButtonAction = (props) => {
  return (
    <button className={'btn btn-primary ' + props.className} onClick={props.action}>
      <i className="material-icons">{props.actionIcon}</i>
    </button>
  )
}

export default ButtonAction
