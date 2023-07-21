import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Details from './Pages/Details';


function App() {
  return (
     <Router>
     <Navbar/>
       <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route exact path="/register" element={<Register/>} />
       <Route exact path="/details" element={<Details/>}/>
 
       </Routes>
       </Router>
  );
}

export default App;
