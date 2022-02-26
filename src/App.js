import React from 'react';
import Calculator from './Calculator'
import Keypads from './Keypads'
import Keydata from './keypad.json'
import ResultScreen from './ResultScreen';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'
library.add(faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals)

const App = () => {
  return (
    <Calculator>
      <ResultScreen result={[0]}/>
      {Keydata.map((item) => (
        <Keypads key={item.key} item={item}/>
      ))}
    </Calculator>
  )
}

export default App;
