import { render, screen, fireEvent } from '@testing-library/react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'
library.add(faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals)
import Calculator from './Calculator';


//Sum
    test('result shoudld be 18 if 9 is added with 9', () => {
        render(<Calculator/>);
        fireEvent.click(screen.getByTestId("number-click-C"))
        fireEvent.click(screen.getByTestId("number-click-9"))
        fireEvent.click(screen.getByTestId("attribute-click-plus"))
        fireEvent.click(screen.getByTestId("number-click-9"))
        fireEvent.click(screen.getByTestId("attribute-click-equals"))
        expect(screen.getByTestId("result")).toHaveTextContent('18');
    })
//Subtraction 
    test('result shoudld be 0 if 9 is minus with 9', () => {
        render(<Calculator/>);
        fireEvent.click(screen.getByTestId("number-click-C"))
        fireEvent.click(screen.getByTestId("number-click-9"))
        fireEvent.click(screen.getByTestId("attribute-click-minus"))
        fireEvent.click(screen.getByTestId("number-click-9"))
        fireEvent.click(screen.getByTestId("attribute-click-equals"))
        expect(screen.getByTestId("result")).toHaveTextContent('0');
    })
//Division #Problem 
    test('result shoudld be 1 if 9 is divided with 9', () => {
        render(<Calculator/>);
        fireEvent.click(screen.getByTestId("number-click-C"))
        fireEvent.click(screen.getByTestId("number-click-9"))
        fireEvent.click(screen.getByTestId("attribute-click-divide"))
        fireEvent.click(screen.getByTestId("number-click-9"))
        fireEvent.click(screen.getByTestId("attribute-click-equals"))
        expect(screen.getByTestId("result")).toHaveTextContent('1');
    })
//Multiply #Problem 
    test('result shoudld be 81 if 9 is multiplied with 9', () => {
        render(<Calculator/>);
        fireEvent.click(screen.getByTestId("number-click-C"))
        fireEvent.click(screen.getByTestId("number-click-9"))
        fireEvent.click(screen.getByTestId("attribute-click-times"))
        fireEvent.click(screen.getByTestId("number-click-9"))
        fireEvent.click(screen.getByTestId("attribute-click-equals"))
        expect(screen.getByTestId("result")).toHaveTextContent('81');
    })
//Clear
    test('result shoudld be cleared if clear button is pressed', () => {
        render(<Calculator/>);
        fireEvent.click(screen.getByTestId("number-click-C"))
        fireEvent.click(screen.getByTestId("number-click-9"))
        fireEvent.click(screen.getByTestId("attribute-click-plus"))
        fireEvent.click(screen.getByTestId("number-click-9"))
        fireEvent.click(screen.getByTestId("number-click-C"))
        expect(screen.getByTestId("result")).toHaveTextContent('');
    })
//Delete
    test('result shoudld be deleted if delete button was pressed', () => {
        render(<Calculator/>);
        fireEvent.click(screen.getByTestId("number-click-C"))
        fireEvent.click(screen.getByTestId("number-click-9"))
        fireEvent.click(screen.getByTestId("attribute-click-plus"))
        fireEvent.click(screen.getByTestId("number-click-9"))
        fireEvent.click(screen.getByTestId("number-click-Del"))
        expect(screen.getByTestId("result")).toHaveTextContent('9+');
    })