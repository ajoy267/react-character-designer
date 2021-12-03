import { render } from '@testing-library/react';
import Character from './character';

test('testing if it renders Character', () => {
  const container = render(<Character />);
  expect(container).toMatchSnapshot();
});
