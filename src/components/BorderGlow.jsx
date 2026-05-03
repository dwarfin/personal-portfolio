import React from "react";

const BorderGlow = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        relative
        border
        border-(--border)
        rounded-3xl
        backdrop-blur-xl
        shadow-[0_18px_60px_rgba(0,0,0,0.35)]
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default BorderGlow;