import { createSignal, onCleanup } from "solid-js";

// YouTube API fetch function
const fetchYouTubeAPI = async (videoId: string) => {
  const url = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${videoId}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '#################################',
      'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

// Your component
export default function InputBoxPage() {
  const [inputValue, setInputValue] = createSignal("");
  const [apiResponse, setApiResponse] = createSignal(null);

  const handleClick = async () => {
    const result = await fetchYouTubeAPI(inputValue());
    setApiResponse(result);
  };

  return (
    <div class="flex items-center justify-center h-full w-full flex-col">
      <h1 class="text-4xl mb-4">video or playlist url</h1>
      <input
        class="border-2 border-gray-300 p-2 rounded-md"
        type="text"
        value={inputValue()}
        onInput={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Fetch from YouTube API</button>
      <p class="mt-4">You typed: {inputValue()}</p>
      {apiResponse() && <pre>{JSON.stringify(apiResponse(), null, 2)}</pre>}
    </div>
  );
}