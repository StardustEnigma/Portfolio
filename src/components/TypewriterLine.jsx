import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

export default function TypewriterLine({
    text,
    className,
    speed = 0.035,
    delay = 0,
    onType,
    onComplete,
}) {
    const elRef = useRef(null);
    const completedRef = useRef(false);
    const tweenRef = useRef(null);

    // Stabilise callbacks so the effect doesn't re-run on every render
    const onTypeRef = useRef(onType);
    onTypeRef.current = onType;
    const onCompleteRef = useRef(onComplete);
    onCompleteRef.current = onComplete;

    useEffect(() => {
        const el = elRef.current;
        if (!el) return;

        // Already finished — just render static text
        if (completedRef.current) {
            el.textContent = text;
            return;
        }

        el.textContent = "";
        const chars = text.split("");
        const obj = { i: 0 };

        tweenRef.current = gsap.to(obj, {
            i: chars.length,
            duration: chars.length * speed,
            delay,
            ease: "none",
            onUpdate() {
                el.textContent = chars.slice(0, Math.floor(obj.i)).join("");
                onTypeRef.current?.();
            },
            onComplete() {
                el.textContent = text;
                completedRef.current = true;
                onCompleteRef.current?.();
            },
        });

        return () => tweenRef.current?.kill();
    }, [text, speed, delay]);

    return <div ref={elRef} className={className} />;
}
