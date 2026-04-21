"use client"

import * as React from "react"
import { AnimatePresence, motion } from "motion/react"
import Threads from "./Waves"
import { VscChromeClose, VscChevronRight } from "react-icons/vsc"
import { useNavigate } from "react-router-dom"
import BorderGlow from "./BorderGlow"

export default function ProjectModal({
  title,
  badge,
  subtitle,
  description,
  tags = [],
  color,
  sections = [],
  cta,
}) {
  const [active, setActive] = React.useState(false)
  const cardRef = React.useRef(null)
  const id = React.useId()

  // Close on ESC or outside click
  React.useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setActive(false)
    const onClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setActive(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    document.addEventListener("mousedown", onClickOutside)
    document.addEventListener("touchstart", onClickOutside)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("mousedown", onClickOutside)
      document.removeEventListener("touchstart", onClickOutside)
    }
  }, [])
  const navigate = useNavigate();

  return (
    <>
      {/* BACKDROP */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* EXPANDED MODAL */}
      <AnimatePresence>
        {active && (
          // <div className="fixed inset-0 z-50 flex justify-center items-start p-10">
          <div className="fixed top-0 left-0 right-0 bottom-24 z-50 flex justify-center items-start p-4 sm:p-10">
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-4xl mx-auto border border-(--accent-border) backdrop-blur-xl rounded-2xl shadow-2xl text-(--text-h) overflow-hidden"
            >
              {/* SCROLLABLE CONTENT */}
              <div className="p-6 sm:p-10 md:p-12 max-h-[80dvh] overflow-y-auto no-scrollbar">

                {/* TITLE + CLOSE BUTTON */}
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold">
                    {title}
                  </h1>

                  <button
                    onClick={() => setActive(false)}
                    className="text-3xl text-(--text) hover:text-(--text-h) transition cursor-target cursor-none"
                  >
                    <VscChromeClose />
                  </button>
                </div>

                {/* CTA AT TOP */}
                {cta && (
                  <div className="text-left mb-10">
                    <button
                      onClick={() => navigate(cta.href)}
                      className="inline-flex items-center justify-center gap-2 bg-(--accent-bg) text-(--accent) border px-6 py-3 rounded-xl font-semibold text-base hover:text-(--text-h) transition cursor-target cursor-none"
                    >
                      View Full Project
                      <VscChevronRight className="text-xl" />
                    </button>
                  </div>
                )}

                {/* BADGE + SUBTITLE */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10">
                  <span className="text-xs px-3 py-1 bg-(--accent-bg) text-(--accent) rounded-full">
                    {badge}
                  </span>
                  <span className="text-sm text-(--text)">{subtitle}</span>
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-3 mb-12">
                  {tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-(--social-bg) rounded text-xs">
                      {t}
                    </span>
                  ))}
                </div>

                {/* DIVIDER */}
                <div className="h-px w-full bg-(--accent-border) mb-10"></div>

                {/* SECTIONS */}
                {sections.map((section, i) => (
                  <div key={i} className="text-left mb-10">
                    <h3 className="text-2xl font-display font-semibold text-(--text-h) mb-3">
                      {section.heading}
                    </h3>

                    {section.text.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-gray-300 leading-relaxed text-base max-w-3xl mb-3"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}

                {/* CTA */}
                {cta && (
                  <div className="text-center mt-10">
                    <button onClick={() => navigate(cta.href)} className="inline-flex items-center justify-center gap-2 bg-(--accent-bg) text-(--accent) border px-6 py-3 rounded-xl font-semibold text-base hover:text-(--text-h) transition cursor-target cursor-none">
                      View Full Project
                      <VscChevronRight className="text-xl" />
                    </button>
                  </div>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* COLLAPSED CARD */}
      <motion.div
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className="group relative w-full max-w-95 h-105 cursor-none backdrop-blur-md rounded-3xl"
      >
        <BorderGlow edgeSensitivity={10} glowColor="40 80 80" backgroundColor="" borderRadius={28} glowRadius={40} glowIntensity={1} coneSpread={40} animated={false} colors={['#c084fc', '#f472b6', '#38bdf8']} className="w-full h-full" >
          <div className="p-0 w-full h-full rounded-3xl overflow-hidden flex flex-col">

            {/* Header */}
            <div className="h-48 overflow-hidden rounded-t-2xl relative">
              <Threads
                color={color}
                amplitude={1}
                distance={0}
                enableMouseInteraction={false}
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium font-display text-(--text-h)">{title}</h3>
                <span className="text-xs px-2 py-1 bg-(--accent-bg) text-(--accent-text) rounded-full">
                  {badge}
                </span>
              </div>

              <p className="text-(--text) text-sm text-left">{description}</p>

              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-(--social-bg) rounded text-(--accent)">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </BorderGlow>
      </motion.div>
    </>
  )
}