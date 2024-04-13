import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home.jsx";
import Men from "./pages/Men.jsx";
import Women from './pages/Women.jsx';
import Kids from './pages/Kids.jsx';
import HomenLiving from './pages/HomenLiving.jsx';
import Beauty from './pages/Beauty.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="men" element={<Men/>}/>
          <Route path="women" element={<Women/>}/>
          <Route path="kids" element={<Kids/>}/>
          <Route path="homenliving" element={<HomenLiving/>}/>
          <Route path="beauty" element={<Beauty/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
