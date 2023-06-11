import { For, createSignal, onCleanup } from "solid-js";
import axios from "axios";
import { favList, setFavList, FavListEntry } from "../components/fav-list";
import { selectedOption } from "../components/qualitySelect";
import InputBox from "../components/InputBox";
import DownloadList from "../components/DownloadList";
import DownloadListEntry from "../components/DownloadListEntry";

const [downloadList, setDownloadList] = createSignal(new Array<DownloadListEntry>());

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
            let index = 0;
            const interval = setInterval(() => {
                if (index >= response.data.data.length) {
                    clearInterval(interval);
                    return;
                }
                fetchYouTubeAPI("https://www.youtube.com/watch?v=" + response.data.data[index].videoId);
                index++;
            }, 1000);
        } catch (error) {
            console.error(error);
        }
        return {};
    }

    const options = {
        method: 'GET',
        url: 'https://youtube-mp36.p.rapidapi.com/dl',
        params: { id: videoId },
        headers: {
            'X-RapidAPI-Key': 'c7ab3deda8msh2451a1693896b23p1a6f98jsnab2367e95718',
            'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const url = response.data.link;

        setDownloadList([...downloadList(), new DownloadListEntry(response.data.title, url)]);

        return url;
    } catch (error) {
        console.error(error);
    }

}

// Component
export default function InputBoxPage() {
    const [inputValue, setInputValue] = createSignal("");
    const [apiResponse, setApiResponse] = createSignal("");

    const handleClick = async () => {
        const result = await fetchYouTubeAPI(inputValue());
        setApiResponse(result);
    };

    const addToFavList = (event: MouseEvent) => {
        const svg = event.currentTarget as HTMLElement;
        const anchor = svg.parentElement?.querySelector("a") as HTMLAnchorElement;
        const urlToSave = anchor?.href;
        setFavList([...favList(), new FavListEntry(anchor.innerText, urlToSave)]);
        localStorage.setItem("savedLinks", JSON.stringify(favList()));
    }

    return (
        <main class="flex items-center justify-center min-h-screen">
            <div class="flex flex-col items-center justify-center w-max mx-auto gap-8 p-8 bg-gray-50 h-min shadow-md">
                <h1 class="text-4xl mb-4 text-center text-gray-700">Video or Playlist Url</h1>
                <InputBox inputValue={inputValue} setInputValue={setInputValue} handleClick={handleClick} />
                <DownloadList downloadList={downloadList} addToFavList={addToFavList} />
            </div>
        </main>

    );
}