import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Wazuh from "./pages/Wazuh";
import Azure from "./pages/Azure";
import NotFound from './pages/NotFound';
import ThankYou from './pages/ThankYou';

// import TargetCursor from "./components/TargetCursor";
import CustomCursor from "./components/TargetCursor";

import { VscHome, VscMortarBoard, VscRepo, VscMail } from "react-icons/vsc";

import Dock from './components/Dock';

import './App.css'

export default function App() {
  const navigate = useNavigate();

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => navigate('/'), },
    { icon: <VscMortarBoard size={18} />, label: 'Education', onClick: () => navigate('/education') },
    { icon: <VscRepo size={18} />, label: 'Projects', onClick: () => navigate('/projects') },
    { icon: <VscMail size={18} />, label: 'Contact', onClick: () => navigate('/contact') },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/wazuh" element={<Wazuh />} />
        <Route path="/azure" element={<Azure />} />

        <Route path="/thank-you" element={<ThankYou />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <CustomCursor hideDefaultCursor={true} />

      <section className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Dock className="cursor-target"
          items={items}
          panelHeight={70}
          baseItemSize={50}
          magnification={60}
        />
      </section>
    </>
  );
}
