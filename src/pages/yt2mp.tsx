import { createSignal, onCleanup } from "solid-js";
import axios from "axios";

// YouTube API fetch functions
const fetchYouTubeAPI: any = async (givenUrl: string) => {
    const playlistId = givenUrl.slice(givenUrl.indexOf("playlist?list=") + "playlist?list=".length);
    const videoId = givenUrl.slice(givenUrl.indexOf("watch?v=") + "watch?v=".length);
    
    if (givenUrl.includes("playlist?list=")) {
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/playlist',
            params: {
                id: playlistId
            },
            headers: {
                'X-RapidAPI-Key': 'c7ab3deda8msh2451a1693896b23p1a6f98jsnab2367e95718',
                'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
            }
        };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
            response.data.data.forEach((element: any) => {
                fetchYouTubeAPI("https://www.youtube.com/watch?v=" + element.videoId);
            });
        } catch (error) {
            console.error(error);
        }
        return {};
    }

    const options = {
    method: 'GET',
    url: 'https://yt-api.p.rapidapi.com/dl',
    params: {id: videoId},
    headers: {
        'X-RapidAPI-Key': 'c7ab3deda8msh2451a1693896b23p1a6f98jsnab2367e95718',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        const url = response.data.formats[0].url;
        window.open(url, "_blank");
    } catch (error) {
        console.error(error);
    }

}
// Component
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