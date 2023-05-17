import React from 'react'
import Button from './Components/Button';
import Checkbox from './Components/Checkbox';
function App() {
  return (
    <>
    <Button size='big' content='Large Button'/>
    <Button size='small' content='small Button'/>
    <Checkbox label='This is Example'/>
    </>
  );
}

export default App;