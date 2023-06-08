import { For, createSignal, onCleanup } from "solid-js";
import axios from "axios";
import {favList, setFavList, FavListEntry } from "../components/fav-list";

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
        const url = response.data.formats[0].url;
        console.log(response.data);
        window.open(url, "_blank");

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
        const svg = event.target as HTMLElement;
        const anchor = svg.parentElement?.querySelector(".link") as HTMLAnchorElement;
        const urlToSave = anchor?.href;
        setFavList([...favList(), new FavListEntry(anchor.innerText, urlToSave)]);
    }

    return (
        <div class="flex items-center justify-center h-full w-full flex-col">
            <div class="flex flex-col justify-center content-center">
                <h1 class="text-4xl mb-4">video or playlist url</h1>
                <input
                    class="border-2 border-gray-300 p-2 rounded-md"
                    type="text"
                    value={inputValue()}
                    onInput={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleClick}>Fetch from YouTube API</button>
                <p class="mt-4">You typed: {inputValue()}</p>
                {/* <a href={apiResponse()} class="text-blue-800 underline">{apiResponse()}</a> */}
            </div>
            <div class="flex flex-col align-baseline p-3 rounded-2xl border-2 gap-2 min-h-[3rem] overflow-y-scroll max-h-full">
                <For each={downloadList()}>
                    {
                        (entry, i) => (
                            <div class="text-center text-lg bg-gray-700 rounded-sm">
                                <a target="_blank" href={entry.url}>{entry.name}</a>
                                {/* add fav symbol */}
                                    <svg onClick={addToFavList} />
                                {/* add fav symbol */}
                            </div>
                        )
                    }
                </For>
                {/* DEBUG */}
                    <div class="text-center text-lg bg-gray-700 rounded-sm">
                    <a target="_blank" href="" class="link text-center text-lg bg-gray-700 rounded-sm">name1</a>
                    {/* add fav symbol */}
                        <svg onClick={addToFavList} />
                    {/* add fav symbol */}
                    </div>
                    
                {/* DEBUG */}
            </div>
        </div>
    );
}