import { createSignal } from "solid-js";

interface InputBoxProps {
    inputValue: () => string;
    setInputValue: (value: string) => void;
    handleClick: () => Promise<void>;
}

export default function InputBox({ inputValue, setInputValue, handleClick }: InputBoxProps) {
    return (
        <div class="flex flex-col gap-5 justify-center content-center">
            <input
                class="border-2 border-gray-300 p-2 rounded-md"
                type="text"
                value={inputValue()}
                onInput={(e) => setInputValue(e.target.value)}
            />
            <button class="text-xl border-2 rounded-md" onClick={handleClick}>Fetch from YouTube API</button>
        </div>
    );
}
