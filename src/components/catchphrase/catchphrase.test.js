import { render } from '@testing-library/react';
import Catchphrase from './catchphrase';

test('testing if it renders Catchphrase', () => {
  const container = render(<Catchphrase />);
  expect(container).toMatchSnapshot();
});
