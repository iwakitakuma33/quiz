import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import Start from './pages/Start';
import Winner from './pages/Winner';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/winner" element={<Winner />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
      </Routes>
    </>
  );
}

export default App;
