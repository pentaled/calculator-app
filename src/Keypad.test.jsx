import { render, screen, fireEvent } from '@testing-library/react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'
library.add(faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals)
import Calculator from './Calculator';


//Sum
    test('result shoudld be 18 if 9 is added with 9', () => {
        render(<Calculator></Calculator>);
        fireEvent.click(screen.getByTestId("number-click-9"))
        fireEvent.click(screen.getByTestId("attribute-click-plus"))
        fireEvent.click(screen.getByTestId("number-click-9"))
        fireEvent.click(screen.getByTestId("attribute-click-equals"))
        const element = screen.getByText(/18/i)
        expect(element).toBe(18);
    })
//Subtraction 

//Division

//Multiply

//Clear

//Delete