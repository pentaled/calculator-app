import React, {useState} from 'react';
import Calculator from './Calculator'
import Keypad from './Keypads'
import Keydata from './keypad.json'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'
library.add(faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals)

const App = () => {
  const [result, setResult] = useState("0")

  const handleClick = (e) => {
    setResult(result.concat(e.target.item.key))
  }
  return (
    <Calculator type="text" title={result}>
      {Keydata.map((item) => (
        <Keypad onClick={handleClick} key={item.key} item={item}/>
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
