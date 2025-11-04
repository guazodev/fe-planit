import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    <div style={{ position: 'fixed', top: 8, right: 8 }}>
      <span>count: {count}</span>
      <button onClick={() => setCount(c => c + 1)} style={{ marginLeft: 8 }}>+1</button>
    </div>
    </>
  )
}

export default App
