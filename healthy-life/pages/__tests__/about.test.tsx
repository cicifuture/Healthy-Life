import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../about';

describe('About Component', () => {
  it('renders the greeting message', () => {
    render(<About />);
    expect(screen.getByText(/lorem ipsum dolor sit amet, consectetur adipiscing elit\. fusce sit amet accumsan ante\./i)).toBeInTheDocument();
  });
});
