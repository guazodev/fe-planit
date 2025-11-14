import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Importa los componentes de página
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    // 1. BrowserRouter habilita el ruteo
    <BrowserRouter>
      {/* Barra de Navegación: siempre visible */}
      <nav style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      {/* 2. Routes define las rutas */}
      <Routes>
        {/*
          RUTA PRINCIPAL: Al usar path="/", Home es la primera página
        */}
        <Route path="/" element={<Home />} />

        {/* Ruta para el Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Ruta de fallback (404) */}
        <Route path="*" element={<div style={{ padding: '20px' }}>
          <h2>404 - Página no encontrada</h2>
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;