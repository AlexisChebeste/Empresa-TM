import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Carrito from './pages/Carrito';
import DetalleComponente from './pages/DetalleComponente';
import DetalleFabricante from './pages/DetalleFabricante';
import DetalleProducto from './pages/DetalleProducto';
import CatalogoComponentes from './pages/CatalogoComponentes';
import CatalogoProductos from './pages/CatalogoProductos';
import CatalogoFabricantes from './pages/CatalogoFabricantes';

function App() {
  return (
    <Router >
      <div className='min-h-screen flex flex-col '>
        <Header />
        <main className='flex-grow'>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<CatalogoProductos />} />
            <Route path="/productos/:id" element={<DetalleProducto />} />
            <Route path="/componentes/:id" element={<DetalleComponente />} />
            <Route path="/fabricantes/:id" element={<DetalleFabricante />} />
            <Route path="/fabricantes" element={<CatalogoFabricantes />} />
            <Route path='/componentes' element={<CatalogoComponentes /> } />
            <Route path='/carrito' element={<Carrito />}/>
          </Routes>
          
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
