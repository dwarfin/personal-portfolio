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

import ScrollToTop from "./components/ScrollTop";
import Grainient from './components/Grainient';

import { VscHome, VscMortarBoard, VscRepo, VscMail } from "react-icons/vsc";
import Dock from './components/Dock';
import './App.css'

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

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
      <Analytics />
      <SpeedInsights />

      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Grainient
          color1="#2C3A45"
          color2="#0F1418"
          color3="#3A4E58"
          timeSpeed={0.5}
          colorBalance={0}
          warpStrength={0.6}
          warpFrequency={3}
          warpSpeed={1.2}
          warpAmplitude={20}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={200}
          noiseScale={1.2}
          grainAmount={0.06}
          grainScale={1.2}
          grainAnimated={false}
          contrast={1.3}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.95}
        />
      </div>

      <ScrollToTop />

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

      <section className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Dock className=""
          items={items}
          panelHeight={70}
          baseItemSize={50}
          magnification={60}
        />
      </section>
    </>
  );
}
