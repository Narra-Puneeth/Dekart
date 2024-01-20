import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Login from './pages/login/login';
import Home from './pages/home';

import './App.css'
import Mainform from './pages/addprod/Mainform';


function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/sell" element={<Mainform/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
