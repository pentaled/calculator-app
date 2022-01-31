import React from 'react';
import Calculator from './Calculator'
import ResultScreen from './ResultScreen'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'
library.add( faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals )


// react hook - state hook or effect hook
//line 14 causing error
const App = () => {
  return (
    <Calculator>
      <ResultScreen class="divide"/>
      
    </Calculator>
  )
}

export default App;


