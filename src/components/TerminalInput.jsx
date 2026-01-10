import { useState } from "react";

export default function TerminalInput({ onCommand }) {
    const [value, setValue] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!value.trim()) return;
        onCommand(value.trim());
        setValue("");
    };

    return (
        <form onSubmit={submit} className="flex gap-2 mt-3">
            <span className="text-[#7f848e]">$</span>
            <input
                autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="flex-1 bg-transparent outline-none text-[#98c379] caret-[#d4d4d4]"
            />
        </form>
    );
}
