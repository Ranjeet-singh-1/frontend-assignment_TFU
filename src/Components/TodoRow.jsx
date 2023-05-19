import Checkbox from './Checkbox'
import Button from './Button'
import './TodoRow.css'
import React, { useState } from 'react'


function TodoRow(props) {
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
        <Checkbox label={props.content} />
        {ishover && <Button  size='small' content='X'/>}
      </div>
    </div>
  )
}

export default TodoRow
