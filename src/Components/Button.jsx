import React from 'react'

function Button(props) {
  const button_style = (props.size === 'big' ? `btn btn-success px-3 btn-lg ` : `btn btn-success px-2 py-0 btn-sm`);
  return (
    <div>
      <button onClick={props.onClick} type='button' className={button_style}>{props.content}</button>
    </div>
  )
}

export default Button;