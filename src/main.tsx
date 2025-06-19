import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import { Register, SignIn } from './components/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
