import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./pages/Menu.jsx";
import Home from "./pages/Home.jsx";
import Card from "./pages/Card.jsx";
import Carrusel from "./pages/Carrusel.jsx";
import Acordeon from "./pages/Acordeon.jsx";

export default function Inicio() {
  return (
    <div className="padre">
      <h1>Menu</h1>
      <Routes>
        <Route path="/" element={<Menu />}>
            <Route path="/" element={<Home />}/>
            <Route path="card" element={<Card />}/>
            <Route path="carrusel" element={<Carrusel />}/>    
            <Route path="acordeon" element={<Acordeon />}/> 
        </Route>
      </Routes>
    </div>
  );
}