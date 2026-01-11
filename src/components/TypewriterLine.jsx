import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TypewriterLine({
                                           text,
                                           className,
                                           speed = 0.035,
                                           delay = 0,
                                           onType,
                                       }) {
    const elRef = useRef(null);
    const completedRef = useRef(false); // 🔒 PERMANENT LOCK

    useEffect(() => {
        const el = elRef.current;
        if (!el) return;

        // 🔒 If already completed, just render text and exit
        if (completedRef.current) {
            el.textContent = text;
            return;
        }

        el.textContent = "";

        const chars = text.split("");
        const obj = { i: 0 };

        const tween = gsap.to(obj, {
            i: chars.length,
            duration: chars.length * speed,
            delay,
            ease: "none",
            onUpdate: () => {
                el.textContent = chars
                    .slice(0, Math.floor(obj.i))
                    .join("");
                onType?.();
            },
            onComplete: () => {
                el.textContent = text;
                completedRef.current = true; // 🔥 LOCK FOREVER
            },
        });

        return () => tween.kill();
    }, [text, speed, delay, onType]);

    return <div ref={elRef} className={className} />;
}
