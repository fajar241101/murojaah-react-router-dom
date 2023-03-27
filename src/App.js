import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Register' element={<Register />}></Route>
    </Routes>
   </Router> 
  )
}

export default App;
