import { useState, useEffect } from "react";
import { VscThreeBars, VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export default function ProjectNav({ items }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  const navigate = useNavigate();
  return (
    <>
      {/* NAVBAR */}
      <aside className="fixed top-0 left-0 w-full h-16 md:h-20 backdrop-blur-[10px] z-50 flex items-center justify-between px-4 md:px-6">

        {/* Logo */}
        <button onClick={() => navigate("/")} className="shrink-0 cursor-none hover:cursor-none bg-transparent p-0 cursor-target">
          <img src="/signature.svg" alt="Logo" className="w-28 md:w-36 lg:w-44 h-auto"/>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-(--text-h) font-sans">
          {items.map(item => (
            <button key={item.href} onClick={() => { document.getElementById(item.href)?.scrollIntoView({ behavior: "smooth" }) }} 
              className="cursor-none hover:cursor-none bg-transparent p-0 text-(--text-h) cursor-target">
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-(--text-h) text-3xl cursor-target" onClick={() => setOpen(o => !o)}>
          {open ? <VscChromeClose /> : <VscThreeBars />}
        </button>
      </aside>

      {/* Mobile Menu */}
      {open && (
        <nav className="fixed inset-0 backdrop-blur-[10px] flex flex-col items-center justify-center text-(--text-h) text-2xl font-sans z-40 md:hidden">
          {items.map(item => (
            <a key={item.href} href={item.href} className="py-2 cursor-target" onClick={() => setOpen(false)} >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}