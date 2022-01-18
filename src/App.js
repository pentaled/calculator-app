import React from 'react';
import Container from './Calculator'
import Buttons from './Keypad'
import ResultScreen from './ResultScreen'
import keypad from './keypad.json'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals} from '@fortawesome/free-solid-svg-icons'
library.add( faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals )

const App = () => {
  return (
    <Container title={ResultScreen}>
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

