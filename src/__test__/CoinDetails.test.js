import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import CoinDetails from '../pages/CoinDetails';
import store from '../redux/store';

describe('Coins test', () => {
  test('snapshot for coins', () => {
    const history = createBrowserHistory();
    const coin = {
      id: '90',
      symbol: 'BTC',
      name: 'Bitcoin',
      nameid: 'bitcoin',
      rank: 1,
      price_usd: '20142.07',
      percent_change_24h: '1.44',
      percent_change_1h: '-0.36',
      percent_change_7d: '-5.64',
      price_btc: '1.00',
      market_cap_usd: '385002452610.93',
      volume24: 27391301861.27469,
      volume24a: 28376681317.71335,
      csupply: '19114346.00',
      tsupply: '19114346',
      msupply: '21000000',
    };
    const info = {
      coins_num: 10734,
      time: 1661984523,
    };
    history.push('/coindetail', { coin, info });
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router history={history}>
            <Routes>
              <Route path="/coindetail" element={<CoinDetails />} />
            </Routes>
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('no state', () => {
    const history = createBrowserHistory();

    history.push({ pathname: '/coindetail' });
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router history={history}>
            <Routes>
              <Route path="/coindetail" element={<CoinDetails />} />
              <Route path="/" element={<div />} />
            </Routes>
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
