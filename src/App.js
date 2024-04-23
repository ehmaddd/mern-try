import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Home />
    </>
  )
};

export default App;
