import { Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/NavBar';
import CoinDetails from './pages/CoinDetails';
import Coins from './pages/Coins';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/coindetail" element={<CoinDetails />} />
      </Routes>
    </div>
  );
}

export default App;
