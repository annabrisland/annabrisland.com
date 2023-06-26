import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Anna', () => {
  render(<App />);
  const linkElement = screen.getByText(/Anna/i);
  expect(linkElement).toBeInTheDocument();
});
