import React from 'react'

function Button(props) {
const button_style=(props.size==='big'?`btn btn-success m-2 px-2 btn-lg`:`btn btn-success m-2 px-2 btn-sm`);
  return (
    <div>
      <button type='button' className={button_style}>{props.content}</button>
    </div>
  )
}

export default Button

