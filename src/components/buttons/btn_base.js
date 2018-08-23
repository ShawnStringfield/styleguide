import React from 'react'

const Button = (props) => {
  return(
    <button className={props.className} onClick={props.action} >
			{props.buttonText}
		</button>
  )
}

export default Button
