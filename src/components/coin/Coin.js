import PropTypes from 'prop-types';
import './Coin.css';

const Coin = (props) => {
  const { coin } = props;

  return (
    <div className="coin">
      <p className="coin-name">{coin.name}</p>
      <small>{`$${coin.price_usd}`}</small>
    </div>
  );
};

export default Coin;

Coin.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    rank: PropTypes.number,
    price_usd: PropTypes.string,
  }).isRequired,
};
