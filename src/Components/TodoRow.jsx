import Checkbox from './Checkbox'
import Button from './Button'
import './TodoRow.css'
import React, { useState } from 'react'


function TodoRow() {
const [ishover,sethover]=useState(false);
const handleMouseEnter=()=>{
  sethover(true);
}
const handleMouseLeave=()=>{
  sethover(false);
}
  return (
    <div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="wrapper">
        <Checkbox label='Random text' />
        {ishover && <Button  size='small' content='X'/>}
      </div>
    </div>
  )
}

export default TodoRow
