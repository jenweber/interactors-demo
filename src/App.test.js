import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { Button } from 'bigtest';

describe('Regular Jest and React testing', () => {
  beforeEach(() => render(<App />));
  it('clicks button', () => {
    const { getByText, queryByText } = render(<App />);
    fireEvent.click(getByText('Sign In'));
    expect(queryByText('Sign In')).toBeFalsy();
    expect(getByText('Log Out')).toBeTruthy();
  })
});

describe('Interactors with Jest', () => {
  beforeEach(() => render(<App />));

  it('clicks button', async () => {
    await Button('Sign In').click();
    await Button('Sign In').absent();
    await Button('Log Out').exists();
  })
})
