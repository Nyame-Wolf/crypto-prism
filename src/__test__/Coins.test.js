import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Coins from '../pages/Coins';
import store from '../redux/store';

describe('Coins test', () => {
  test('snapshot for coins', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Coins />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
