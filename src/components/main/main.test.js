import { render } from '@testing-library/react';
import Main from './main';

test('testing if it renders Main', () => {
  const container = render(<Main />);
  expect(container).toMatchSnapshot();
});
