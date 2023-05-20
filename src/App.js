import React, { useState } from 'react'
import Button from './Components/Button';
import TodoRow from './Components/TodoRow';
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([]);    //state variable to keep track of todolist
  const [inputText, setInputText] = useState('');  //state variable to keep track of inputtext entered as task name

  const handleInput = (e) => {
    setInputText(e.target.value);
  }

  const addListElement = () => {
    setTodoList([...todoList, inputText]);
    setInputText('');
  }

  const handleDeleteTodo = (content) => {
    const updatedTodoList = todoList.filter((task) => task !== content);
    setTodoList(updatedTodoList);
  }



  return (
    <>
      <div className='box p-3 rounded'>
        <h4>Todo</h4>
        <ul className='anslist'>
          {todoList.map((task) => (
            <TodoRow key={task} content={task} onDelete={handleDeleteTodo} />
          ))}
        </ul>
        <hr className='mt-5' />
        <div className="row  justify-content-center align-items-center">
          <div className="col-9"><input className='form-control inp' onChange={handleInput} type="text" name="taskName" id="task" value={inputText} placeholder='Add task here...' /></div>
          <div className="col-3"><div onClick={addListElement}><Button size='big' content='Add' /></div></div>
        </div>
      </div>
    </>
  );
}

export default App;