
import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

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
            <Route path="/maingift" element={<Gift />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
     
  );
}

export default App;
