import React from 'react'

function Button(props) {
const button_style=(props.size==='big'?'btn btn-success btn-lg':'btn btn-success btn-sm');
  return (
    <div>
      <button type='button' className={button_style}>{props.content}</button>
    </div>
  )
}

export default Button

