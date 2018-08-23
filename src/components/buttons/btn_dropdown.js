import React from 'react'
import Button from './btn_base'
import ButtonAction from './btn_action'

const ButtonDropdown = (props) => {
  return (
    <span className="btn-group">
      <Button
				className="btn btn-primary"
				buttonText={props.buttonText}
				action={props.action} />

      <ButtonAction
				className="btn-action"
				actionIcon={props.actionIcon}
				action={props.action} />
    </span>
  )
}

export default ButtonDropdown
