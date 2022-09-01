import { useLocation, Navigate } from 'react-router-dom';
import './CoinDetails.css';

const CoinDetails = () => {
  const location = useLocation();

  const singleData = location?.state?.coin;
  if (!singleData) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <div className="container">
        <p>{`Coins supply in market: ${singleData.csupply}`}</p>
      </div>
      <p className="name">{singleData.name}</p>
      <p className="name">{`Rank:  ${singleData.rank}`}</p>
      <p className="name">{`Symbol:  ${singleData.symbol}`}</p>
      <p className="name">{`Market cap in USD:  $${singleData.market_cap_usd}`}</p>
      <p className="name">{`Weekly percentage change:  ${singleData.percent_change_7d}`}</p>
      <p className="name">{`Price:  $${singleData.price_usd}`}</p>
    </div>
  );
};
export default CoinDetails;
