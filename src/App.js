import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage"
import Login from "./pages/login"
import Home from "./pages/home"
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
