import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const cornersRef = useRef([]);

  const isTouch = window.matchMedia("(pointer: coarse)").matches;
  const isMac = navigator.userAgent.includes("Mac");

  if (isTouch || isMac) {
    document.body.style.cursor = "auto";
    return null;
  }

  useEffect(() => {
    const dot = dotRef.current;
    const corners = cornersRef.current;

    document.body.style.cursor = "none";

    gsap.set(dot, { xPercent: -50, yPercent: -50, willChange: "transform" });
    gsap.set(corners, {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      willChange: "transform",
    });

    const moveX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
    const moveY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" });

    let mouseX = 0;
    let mouseY = 0;

    function moveHandler(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      moveX(mouseX);
      moveY(mouseY);

      if (!dot.dataset.active) {
        corners.forEach((corner) => {
          gsap.to(corner, {
            x: mouseX,
            y: mouseY,
            opacity: 0,
            duration: 0.12,
            ease: "power3.out",
          });
        });
      }
    }

    function isHoveringWithBuffer(rect, x, y, buffer = 12) {
      return (
        x > rect.left - buffer &&
        x < rect.right + buffer &&
        y > rect.top - buffer &&
        y < rect.bottom + buffer
      );
    }

    function overHandler(e) {
      const target = e.target.closest(".cursor-target");

      if (target) {
        const rect = target.getBoundingClientRect();
        if (!isHoveringWithBuffer(rect, mouseX, mouseY)) return;

        dot.dataset.active = "true";

        const positions = [
          { x: rect.left - 3, y: rect.top - 3 },
          { x: rect.right + 3, y: rect.top - 3 },
          { x: rect.right + 3, y: rect.bottom + 3 },
          { x: rect.left - 3, y: rect.bottom + 3 },
        ];

        corners.forEach((corner, i) => {
          gsap.to(corner, {
            x: positions[i].x,
            y: positions[i].y,
            opacity: 1,
            duration: 0.12,
            ease: "power3.out",
          });
        });
      } else {
        dot.dataset.active = "";

        corners.forEach((corner) => {
          gsap.to(corner, {
            x: mouseX,
            y: mouseY,
            opacity: 0,
            duration: 0.12,
            ease: "power3.out",
          });
        });
      }
    }

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseover", overHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseover", overHandler);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      {/* Four corners */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          ref={(el) => (cornersRef.current[i] = el)}
          className="fixed top-0 left-0 z-[9999] pointer-events-none"
        >
          <div
            className={`
              absolute w-3 h-3 border-white 
              ${i === 0 ? "border-t-2 border-l-2" : ""}
              ${i === 1 ? "border-t-2 border-r-2" : ""}
              ${i === 2 ? "border-b-2 border-r-2" : ""}
              ${i === 3 ? "border-b-2 border-l-2" : ""}
              -translate-x-1/2 -translate-y-1/2
            `}
          />
        </div>
      ))}

      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[10000] pointer-events-none bg-white w-2 h-2 rounded-[10px]"
      />
    </>
  );
}
