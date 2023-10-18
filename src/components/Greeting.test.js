import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders "Hello world" as a text', () => {
    // Arranage
    render(<Greeting />);

    // Act, nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello world', { exact: false }); // by default exact is true

    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    // Arranage
    render(<Greeting />);

    // Act, nothing

    // Assert
    const outputElement = screen.getByText('good to see you', { exact: false });

    expect(outputElement).toBeInTheDocument();
  });

  test('does not renders "good to see you" if the button was clicked', async () => {
    // Arranage
    render(<Greeting />);

    // Act
    const buttonMarkup = screen.getByRole('button');
    await userEvent.click(buttonMarkup);

    // Assert
    const outputElement = screen.queryByText('good to see you', {
      exact: false,
    });

    expect(outputElement).toBeNull();
  });

  test('renders "Changed!" if the button was clicked', async () => {
    // Arranage
    render(<Greeting />);

    // Act
    const buttonMarkup = screen.getByRole('button');
    await userEvent.click(buttonMarkup);

    // Assert
    const outputElement = screen.getByText('Changed!');

    expect(outputElement).toBeInTheDocument();
  });
});
