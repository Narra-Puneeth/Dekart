import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { Navigate } from 'react-router-dom';
import Login from './pages/openpage/Login.js'
import Signup from './pages/openpage/Signup.js'
import Navbar from './components/Navbar'
import Layout from './components/Layout.js';
function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="*"
              element={user ? <Layout/> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login/> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

