import { render, screen, waitFor } from '@testing-library/react';

import Posts from './Posts';

describe('Posts component', () => {
  test('renders posts data', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p-1', title: 'first post' }],
    });

    render(<Posts />);

    const listItemMarkups = await screen.findAllByRole('list');

    expect(listItemMarkups).not.toHaveLength(0);
  });
});
