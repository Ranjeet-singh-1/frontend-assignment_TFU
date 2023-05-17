import React from 'react'
import Checkbox from './Checkbox'
import Button from './Button'
import './TodoRow.css'
function TodoRow() {
  return (
    <div>
      <div className="wrapper">
        <Checkbox label='Random text' />
        <Button size='small' content='X'/>
      </div>
    </div>
  )
}

export default TodoRow
