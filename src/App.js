import React from 'react';
import Calculator from './Calculator'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'
library.add(faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals)

const App = () => {
  return (
    <Calculator result={[0]}/>
  )
}

export default App;
