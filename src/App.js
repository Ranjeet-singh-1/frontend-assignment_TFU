import React, { useState } from 'react'
import './App.css'
import Button from './Components/Button';
import TodoRow from './Components/TodoRow';

function App() {
  const [todoList,setTodoList]=useState([]);
  const [inputText,setInputText]=useState('');

  const handleInput=(e)=>{
    setInputText(e.target.value);
  }
  const addListElement=()=>{
    // let listElement=document.createElement('li');
    // listElement.innerHTML=<TodoRow/>;
    // let todoList=document.querySelector('.anslist');
    // todoList.appendChild(listElement);
    if (inputText.trim() !== '') {
      const newComponent = <TodoRow key={todoList.length} content={inputText}/>;
      setTodoList([...todoList, newComponent]);
      setInputText('');
    }
  }

  return (
    <>
      <div className='box p-3 rounded'>
        <h4>Todo</h4>
        <ul className='anslist'>
          {todoList}
        </ul>
        <hr className='mt-5'/>
        <div className="row  justify-content-center align-items-center">
          <div className="col-9"><input onChange={handleInput} type="text" name="taskName" id="task" value={inputText} placeholder='Add task here...' /></div>
          <div className="col-3"><div onClick={addListElement}><Button size='big' content='Add' /></div></div>
        </div>
      </div>
    </>
  );
}

export default App;