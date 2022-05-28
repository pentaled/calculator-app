import { render, screen, fireEvent } from '@testing-library/react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'
library.add(faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals)
import Calculator from './Calculator';


//Sum
    test('result shoudld be six if three is added with three', () => {
        render(<Calculator></Calculator>);
        fireEvent.click(screen.getByTestId("number-click-3"))
        fireEvent.click(screen.getByTestId("attribute-click-plus"))
        fireEvent.click(screen.getByTestId("number-click-3"))
        fireEvent.click(screen.getByTestId("attribute-click-equals"))
        const element = screen.getByTestId('result')
        expect(element).toBe(6);
    })
//Subtraction 

//Division

//Multiply

//Clear

//Delete