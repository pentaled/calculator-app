import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';
import mockData from '../../mock-data'

test('renders List without data', () => {
  render(<List data={[]} />);
  const element = screen.getByText(/No Data/i);
  expect(element).toBeInTheDocument();
});

test('renders List with data', () => {
    render(<List data={mockData} />);
    const element = screen.getByText(/Data/i);
    expect(element).toBeInTheDocument();
});

test('renders List when data is six', () => {
  render(<List data={mockData}></List>);
  const element = screen.getAllByTestId(/list-item/i);
  expect(element).toHaveLength(6);
});
// test the length of mockData - data.length === 6

test('update open button to close button and show form', () => {
  render(<List data={mockData}></List>);
  fireEvent.click(screen.getByTestId("button-show-form"));

  const closebutton = screen.getByTestId('button-hide-form');
  expect(closebutton).toBeTruthy()

  const updateform = screen.getByPlaceholderText('Add todo item')
  expect(updateform).toBeTruthy()
});

test('update close button to open button and hide form', () => {
  render(<List data={mockData}></List>);
  fireEvent.click(screen.getByTestId("button-show-form"));
  fireEvent.click(screen.getByTestId("button-hide-form"));
  const openbutton = screen.getByTestId('button-show-form');
  expect(openbutton).toBeTruthy()
});

test('create new todo item', () => {
  render(<List data={mockData} />);
  fireEvent.click(screen.getByTestId('button-show-form'))
  const todoForm = screen.getByTestId('todo-form-new');
  expect(todoForm).toBeTruthy()

  const element = screen.getAllByTestId(/list-item/i);
  expect(element).toHaveLength(6);

  const inputField = screen.getByTestId('input-description-new')
  expect(inputField).toBeTruthy
  
  fireEvent.change(inputField, {target: { value: 'Buy Chicken' }})
  expect(inputField.value).toBe('Buy Chicken')

  fireEvent.submit(todoForm)

  const newItems = screen.getAllByTestId(/list-item/i);
  expect(newItems).toHaveLength(7);
});