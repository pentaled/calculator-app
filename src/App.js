import React from 'react';
import Container from './Calculator'
import Buttons from './Keypad.jsx'
import keypad from './keypad.json'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals} from '@fortawesome/free-solid-svg-icons'
library.add( faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals )


// react hook - state hook or effect hook

const App = () => {
  return (
    <Container title="calculator">
      <Buttons data={keypad}/>
    </Container>
  )
}

export default App;


