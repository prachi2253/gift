
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Wish from './components/wish';
import Cake from './components/cake/cake';
import User from './components/user';
import Gift from './components/gift';
function App() {
  return (
    
         <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/wish" element={<Wish />} />
            <Route path="/cake" element={<Cake />} />
            <Route path="/user" element={<User />} />
            <Route path="/gift" element={<Gift />} />
          </Routes>
        </Router>
     
  );
}

export default App;
