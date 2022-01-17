import React from 'react';
import Container from './components/Calculator'
import Buttons from './components/Buttons/Keypad'
import keypad from './keypad.json'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals} from '@fortawesome/free-solid-svg-icons'
library.add( faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals )

const App = () => {
  return (
    <Container title="">
      <Buttons input={keypad, library}/>
    </Container>
  )
}

export default App;

//display: flex;
//    flex-direction: row;
//    flex-wrap: wrap;
//for the frame calculator
//#333333
//#FA9033
//margin: 0 5px 12px;

