import React, { useState } from 'react';
import Calculator from './Calculator'
import Keypad from './Keypads'
import Keydata from './keypad.json'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'
library.add(faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals)

const App = () => {
  const [result, setResult] = useState([])

  const handleClick = (e) => {
    const apply = Keydata.push()
    setResult(apply.concat(e.target.name))
  }
  return (
    <Calculator type="text" title={result}>
      {Keydata.map((item) => (
        <Keypad name={item.attributes}key={item.key} onClick={handleClick} item={item}/>
      ))}
    </Calculator>
  )
}

export default App;
