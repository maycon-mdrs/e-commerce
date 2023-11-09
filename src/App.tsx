import React from 'react';
import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './pages/privateRoutes';
import { LoginPage } from './pages/login/LoginPage';
import { CadastroPage } from './pages/cadastro/CadastroPage';
import { HomePage } from './pages/home/HomePage';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes/>}>
          {/* <Route path='/home' element={<HomePage />}></Route>
          <Route path="*" element={<Navigate to="/home" />} /> */}
      </Route>
      <Route path='/home' element={<HomePage />}></Route>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path='/cadastro' element={<CadastroPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>

      {/* <Route path='/carrinho' element={<CarrinhoPage />}></Route> */}
    </Routes>
  );
}

export default App;