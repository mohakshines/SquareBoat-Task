import { useEffect } from 'react';
// import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import PrivateRoute from './helper/PrivateRoute';
import Navbar from './pages/components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route exact path='/home' element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
