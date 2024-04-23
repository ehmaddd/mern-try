import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
  )
};

export default App;
