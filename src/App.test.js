import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('regular jest and react testing', () => {
  const { getByText, queryByText } = render(<App />);
  expect(queryByText('Sign outd')).toBeFalsy();
  fireEvent.click(getByText('Sign in'));
  expect(queryByText('Sign in')).toBeFalsy();
  expect(getByText('Sign out')).toBeTruthy();
});

test('using bigtest interactors', () => {
  const { getByText, queryByText } = render(<App />);
  expect(queryByText('Sign outd')).toBeFalsy();
  fireEvent.click(getByText('Sign in'));
  expect(queryByText('Sign in')).toBeFalsy();
  expect(getByText('Sign out')).toBeTruthy();
});
