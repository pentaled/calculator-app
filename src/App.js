import React from 'react';
import Calculator from './Calculator'
import Keypad from './Keypads'
import Keydata from './keypad.json'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'
library.add(faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals)

const App = () => {
  return (
    <Calculator title="0">
      {Keydata.map((item) => (
        <Keypad key={item.key} />
      ))}
    </Calculator>
  )
}

export default App;

// Number 1: Calculator.jsx
// Check how you use "children" in Calculator.jsx, if you are not using "children" you can't render the content between the tags. 
// You can use other name to replace "children". That is the default name for the content between the tags. 

// Number 2: App.js
// How do you pass the "item" props to Keypad. Check the todo app and see you pass "item" from List.jsx to ListItem.jsx

// Number 3: Keypads.jsx
// Check how you import the "item", you have missing curcly bracket. Check ListItem.jsx from the todo app.