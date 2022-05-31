import React from 'react';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import {Home} from './Pages/Home';
import { Landing } from './Pages/Landing';

export const App = () => {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </HashRouter>
    </>
  )
}
