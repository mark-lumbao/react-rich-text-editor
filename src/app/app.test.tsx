import { render } from '@testing-library/react';
import App from '.';

test('App wrapper test', () => {
  const { debug, container } = render(<App />);

  debug();

  expect(container).not.toBeNull();
});
