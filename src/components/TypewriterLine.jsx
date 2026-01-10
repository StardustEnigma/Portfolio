import { useEffect, useState } from "react";

export default function TypewriterLine({ text, className, speed = 14 }) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let i = 0;
        setDisplayed("");

        const interval = setInterval(() => {
            if (i >= text.length) {
                clearInterval(interval);
                return;
            }

            setDisplayed((prev) => prev + text.charAt(i));
            i++;
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <div className={className}>{displayed}</div>;
}
