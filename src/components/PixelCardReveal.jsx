import { useState, useMemo, cloneElement, useEffect, useRef } from "react";
import PixelCard from "./PixelCard";

export default function PixelCardReveal({ children, ...props }) {
    const isTouch = useMemo(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia("(pointer: coarse)").matches;
    }, []);

    const [revealed, setRevealed] = useState(false);
    const cardRef = useRef(null);

    const [defaultChild, revealedChild] = Array.isArray(children)
        ? children
        : [children, null];

    const stripOpacity = cls => cls.replace(/opacity-\d+/g, "").trim();

    const defaultClasses = isTouch
        ? revealed ? "opacity-0" : "opacity-100"
        : "opacity-100 group-hover:opacity-0";

    const revealedClasses = isTouch
        ? revealed ? "opacity-100" : "opacity-0"
        : "opacity-0 group-hover:opacity-100";

    useEffect(() => {
        if (!isTouch) return;

        const handleOutside = e => {
            if (cardRef.current && !cardRef.current.contains(e.target)) {
                setRevealed(false);
            }
        };

        document.addEventListener("click", handleOutside);
        return () => document.removeEventListener("click", handleOutside);
    }, [isTouch]);

    return (
        <div
            ref={cardRef}
            onClick={e => {
                if (isTouch) {
                    if (revealed) {
                        e.stopPropagation();
                        setRevealed(false);
                        return;
                    }

                    setRevealed(true);
                }
            }}
            className="relative w-fit group"
        >
            <PixelCard
                {...props}
                noHover={isTouch}
                noFocus={isTouch}
            >
                {cloneElement(defaultChild, {
                    className: stripOpacity(defaultChild.props.className) + " " + defaultClasses
                })}

                {cloneElement(revealedChild, {
                    className: stripOpacity(revealedChild.props.className) + " " + revealedClasses
                })}
            </PixelCard>
        </div>
    );
}