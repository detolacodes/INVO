import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/home/Home';
import GameTab from './routes/GameTab/gametab';
import DashboardTab from './routes/DashboardTab/dashboardtab';
import GDPRDashboard from './routes/GDPRDashboard/GDPRDashboard';
import AddGame from './routes/AddGame/addgame';
import BuyAndSell from './routes/BuyAndSell/buyandsell';
import PlayerSupport from './routes/PlayerSupport/playersupport';
import ReadMail from './routes/ReadMail/readmail';

function App() {
  return (
    <Routes>
      <Route path="/gametab" element={<GameTab />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboardtab" element={<DashboardTab />} />
      <Route path="/GDPRDashboard" element={<GDPRDashboard />} />
      <Route path="/addgame" element={<AddGame />} />
      <Route path="/buyandsell" element={<BuyAndSell />} />
      <Route path="/playersupport" element={<PlayerSupport />} />
      <Route path="/readmail" element={<ReadMail />} />
    </Routes>
  );
}

export default App;
