import React from 'react';
import Calculator from './Calculator'
import Keypad from './Keypad.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals} from '@fortawesome/free-solid-svg-icons'
library.add( faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals )


// react hook - state hook or effect hook
//line 14 causing error
const App = () => {
  return (
    <Calculator result="0">
      <Keypad item={library}></Keypad> 
    </Calculator>
  )
}

export default App;


