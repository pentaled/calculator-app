import { render, screen, fireEvent } from '@testing-library/react';
import Keypads from './Keypads'
import Calculator from './Calculator';
import keypad from './keypad.json'

//Sum
    test('result shoudld be six if three is added with three', () => {
        render(<Calculator item={keypad}></Calculator>);
        fireEvent.click(screen.getByTestId("number-click-3"))
        fireEvent.click(screen.getByTestId("attribute-click-plus"))
        fireEvent.click(screen.getByTestId("number-click-3"))
        const element = screen.getByText('result')
        expect(element).toHaveValue('6');
    })
//Subtraction 

//Division

//Multiply

//Clear

//Delete