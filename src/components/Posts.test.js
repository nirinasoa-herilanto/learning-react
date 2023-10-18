import { render, screen, waitFor } from '@testing-library/react';

import Posts from './Posts';

describe('Posts component', () => {
  test('renders posts data', async () => {
    render(<Posts />);

    const listItemMarkups = await screen.findAllByRole('list');

    expect(listItemMarkups).not.toHaveLength(0);
  });
});
