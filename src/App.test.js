import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to my project title', () => {
  render(<App />);

  const welcomeTitleElement = screen.getByText(/Welcome to my project/i);

  expect(welcomeTitleElement).toBeInTheDocument();
});
