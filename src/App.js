import './App.css';
import React from 'react';
import Home from './pages/home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Contato from './pages/contato/contato'; 
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/comentários/comentarios';

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path ='/' element ={<Home />}/>
        <Route path ='/Contato' element ={<Contato />}/>
        <Route path ='/Fotos' element ={<Fotos />}/>
        <Route path ='/Comentários' element ={<Comentarios />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
