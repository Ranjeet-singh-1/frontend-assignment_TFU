import React from 'react'
import './Checkbox.css'

function Checkbox(props) {
  return (
    <div className='check'>
      <input type="checkbox" name="" id="checkbox" />
      <label htmlFor="checkbox">{props.label}</label>
    </div>
  )
}

export default Checkbox
