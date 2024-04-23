import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Insert from './Insert';
import Search from './Search';

const WebRoutes = () => (
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/insert" element={<Insert />} />
  <Route path="/Search" element={<Search />} />
</Routes>
);

export default WebRoutes;
