import React from 'react';
import Calculator from './Calculator'
import Keypad from './Keypads'
import data from './keypad.json'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'
library.add( faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals )

const App = (props) => {
  return (
    <Calculator title="0">
      {data.map((item) => (
        <Keypad key={item}>{props.children}</Keypad>
      ))}
    </Calculator>
  )
}

export default App;

//Check the following:
//1. If you want to show the content between a react tag, you need to use “children”
//3. How do you pass the item to the  Keypad component
