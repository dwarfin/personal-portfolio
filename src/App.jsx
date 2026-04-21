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
import CustomCursor from "./components/TargetCursor";
import Beams from './components/Beams';
import Grainient from './components/Grainient';

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

      <div className="fixed inset-0 -z-10 pointer-events-none">
          <Grainient
          color1="#3A4F63"
          color2="#1A242C"
          color3="#6A4A72"
          timeSpeed={.7}
          colorBalance={0}
          warpStrength={1.2}
          warpFrequency={6}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
        {/* <Beams
          beamWidth={3}
          beamHeight={30}
          lightColor="#ffefdd"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" /> */}
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
