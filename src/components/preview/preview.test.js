import { render } from '@testing-library/react';
import Preview from './preview';

test('testing if it renders Preview', () => {
  const container = render(<Preview />);
  expect(container).toMatchSnapshot();
});
