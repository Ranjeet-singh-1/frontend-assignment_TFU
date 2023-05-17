import React from 'react'
import './Checkbox.css'

function Checkbox(props) {
  return (
    <label className='check'>
      <input type="checkbox"/>
      <span >{props.label}</span>
    </label>
  )
}

export default Checkbox
