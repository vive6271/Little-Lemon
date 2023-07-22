import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import BookingPage from './pages/BookingPage';
import { MemoryRouter } from 'react-router-dom';

afterEach(() =>{
  cleanup();
});

test('Renders the BookingForm heading', () => {
  render(<MemoryRouter><BookingPage/></MemoryRouter>);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test('Renders the reservation button', () => {
  render(<MemoryRouter><BookingPage/></MemoryRouter>);
  const button = screen.getByText("Make your reservation");
  expect(button).toBeInTheDocument();
});

test('Submit reservation form', () => {
  render(<MemoryRouter><BookingPage/></MemoryRouter>);

  const button = screen.getByText("Make your reservation");
  const date = localStorage.getItem("bookings");
  fireEvent.click(button);

  const new_date = localStorage.getItem("bookings");
  expect(date !== new_date);
  expect(button.style.backgroundColor !== "#a8a8a8");
})