import React from 'react'
import {Tasks} from './Tasks/Tasks';
import Box from './Box';

function App() {
  return (
    <div>
      <Box data={Tasks}   />
    </div>
  )
}

export default App;
