import React from 'react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Coin from '../components/coin/Coin';

describe('Coin test', () => {
  test('snapshot for coin', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Coin
            coin={{
              id: '90',
              symbol: 'BTC',
              name: 'Bitcoin',
              rank: 1,
              price_usd: '20142.07',
            }}
          />
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});

Coin.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    rank: PropTypes.number,
    price_usd: PropTypes.string,
  }).isRequired,
};
