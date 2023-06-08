import { For, createSignal, onCleanup } from "solid-js";
import axios from "axios";
import {favList, setFavList, FavListEntry } from "../components/fav-list";
import { selectedOption } from "../components/qualitySelect";

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
        const url = response.data.formats[selectedOption().index].url;

        console.log(response.data.formats);

        setDownloadList([...downloadList(), new DownloadListEntry(response.data.title, url)]);
        
        return url;
    } catch (error) {
        console.error(error);
    }

}



class DownloadListEntry {
    public name: string;
    public url: string;
    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
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
    }

    return (
        <div class="flex items-center justify-center h-full w-full flex-col gap-5">
            <div class="flex flex-col gap-5 justify-center content-center">
                <h1 class="text-4xl mb-4">Video or Playlist Url</h1>
                <input
                    class="border-2 border-gray-300 p-2 rounded-md"
                    type="text"
                    value={inputValue()}
                    onInput={(e) => setInputValue(e.target.value)}
                />
                <button class="text-xl border-2 rounded-md" onClick={handleClick}>Fetch from YouTube API</button>
                {/* <a href={apiResponse()} class="text-blue-800 underline">{apiResponse()}</a> */}
            </div>
            <div class="flex flex-col max-w-full min-w-[20rem] gap-5 align-baseline p-3 rounded-2xl border-2 min-h-[3rem] overflow-y-scroll max-h-full">
                <For each={downloadList()}>
                    {
                        (entry, i) => (
                            <div class="flex justify-between gap-5 text-center text-lg bg-gray-300 rounded-md p-3">
                                <a target="_blank" href={entry.url}>{entry.name}</a>
                                <svg onClick={addToFavList} aria-hidden="true" height="32" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                                </svg>
                            </div>
                        )
                    }
                </For>
            </div>
        </div>
    );
}