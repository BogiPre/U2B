import { createSignal } from "solid-js";

export default function InputBoxPage() {
  const [inputValue, setInputValue] = createSignal("");

  return (
    <div class="flex items-center justify-center h-full w-full flex-col">
      <h1 class="text-4xl mb-4">video or playlist url</h1>
      <input
        class="border-2 border-gray-300 p-2 rounded-md"
        type="text"
        value={inputValue()}
        onInput={(e) => setInputValue(e.target.value)}
      />
      <p class="mt-4">You typed: {inputValue()}</p>
    </div>
  );
}
