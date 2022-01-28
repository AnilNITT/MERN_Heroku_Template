import React from 'react';
import { Route, Routes, Navigate  } from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>

        <Route exact path="/Home" element={<Home />}  />

        <Route exact path="/" element={<Navigate to="/Home"/>}  />

        <Route path="*" element={<NotFound/>}  />

      </Routes>
    </div>
  );
}

export default App;
