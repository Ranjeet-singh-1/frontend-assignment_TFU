import Checkbox from './Checkbox'
import Button from './Button'
import './TodoRow.css'
import React, { useState } from 'react'


function TodoRow({ content, onDelete }) {
  const [ishover, sethover] = useState(false); /*Used to keep track of onhover state of todo row*/

  const handleMouseEnter = () => {
    sethover(true);
  }

  const handleMouseLeave = () => {
    sethover(false);
  }

  const handleDelete = () => {
    onDelete(content);
  };

  return (
    <div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="wrapper">
        <Checkbox label={content} />
        {ishover && <Button onClick={handleDelete} size='small' content='X' />}
      </div>
    </div>
  )
}

export default TodoRow;