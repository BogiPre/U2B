import { createSignal } from "solid-js";


interface InputBoxProps {
    inputValue: () => string;
    setInputValue: (value: string) => void;
    handleClick: () => Promise<void>;
}

export default function InputBox({ inputValue, setInputValue, handleClick }: InputBoxProps) {
    return (
        <div class="flex flex-col gap-6 justify-center content-center">
            <div class="flex items-center border-2 border-gray-200 p-2 rounded-md shadow-sm">
                <i class="fas fa-link mr-2 text-gray-500"></i>
                <input
                    class="flex-1"
                    type="text"
                    value={inputValue()}
                    onInput={(e) => setInputValue(e.target.value)}
                    placeholder="Paste your link here"
                />
            </div>
            <button
                class="text-xl bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
                onClick={handleClick}
            >
                Fetch from YouTube API
            </button>
        </div>
    );
}
