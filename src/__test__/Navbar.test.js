import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from '../components/nav/NavBar';
import store from '../redux/store';

describe('Coins test', () => {
  test('snapshot for coins', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Navbar />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
