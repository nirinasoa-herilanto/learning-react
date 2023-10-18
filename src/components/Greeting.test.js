import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('Renders Hello world text', () => {
  // Arranage
  render(<Greeting />);

  // Act, nothing

  // Assert
  const helloWorldElement = screen.getByText('Hello world', { exact: false }); // by default exact is true

  expect(helloWorldElement).toBeInTheDocument();
});
