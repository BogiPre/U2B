import { createSignal } from "solid-js";
import { For } from "solid-js";

export class FavListEntry {
    public name: string;
    public url: string;
    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}

//DEBUG
    const debugEntryList = [
        new FavListEntry("name1", "https://www.youtube.com/watch?v=ghajggFADS"),
        new FavListEntry("name2", "https://www.youtube.com/watch?v=ghaASdfgb"),
        new FavListEntry("name3", "https://www.youtube.com/watch?v=ghajafgb"),
        new FavListEntry("name4", "https://www.youtube.com/watch?v=gffajsdb"),
        new FavListEntry("name1", "https://www.youtube.com/watch?v=ghajggFADS"),
        new FavListEntry("name2", "https://www.youtube.com/watch?v=ghaASdfgb"),
        new FavListEntry("name3", "https://www.youtube.com/watch?v=ghajafgb"),
        new FavListEntry("name4", "https://www.youtube.com/watch?v=gffajsdb"),
        new FavListEntry("name1", "https://www.youtube.com/watch?v=ghajggFADS"),
        new FavListEntry("name2", "https://www.youtube.com/watch?v=ghaASdfgb"),
        new FavListEntry("name3", "https://www.youtube.com/watch?v=ghajafgb"),
        new FavListEntry("name4", "https://www.youtube.com/watch?v=gffajsdb"),
        new FavListEntry("name1", "https://www.youtube.com/watch?v=ghajggFADS"),
        new FavListEntry("name2", "https://www.youtube.com/watch?v=ghaASdfgb"),
        new FavListEntry("name3", "https://www.youtube.com/watch?v=ghajafgb"),
        new FavListEntry("name4", "https://www.youtube.com/watch?v=gffajsdb"),
        new FavListEntry("name1", "https://www.youtube.com/watch?v=ghajggFADS"),
        new FavListEntry("name2", "https://www.youtube.com/watch?v=ghaASdfgb"),
        new FavListEntry("name3", "https://www.youtube.com/watch?v=ghajafgb"),
        new FavListEntry("name4", "https://www.youtube.com/watch?v=gffajsdb"),
        new FavListEntry("name1", "https://www.youtube.com/watch?v=ghajggFADS"),
        new FavListEntry("name2", "https://www.youtube.com/watch?v=ghaASdfgb"),
        new FavListEntry("name3", "https://www.youtube.com/watch?v=ghajafgb"),
        new FavListEntry("name4", "https://www.youtube.com/watch?v=gffajsdb")
    ]
//DEBUG

export const [favList, setFavList] = createSignal(new Array<FavListEntry>());

export default function FavList() {
    const [isOpen, setIsOpen] = createSignal(true);

    //DEBUG
        setFavList(debugEntryList);
    //DEBUG

    const removeFromFavList = (event: MouseEvent) => {
        const svg = event.target as HTMLElement;
        const anchor = svg.parentElement?.querySelector(".link") as HTMLAnchorElement;
        const elementToBeDeleted = favList().find(element => element.name == anchor.innerText && element.url == anchor.href);
        const newFavList = favList().filter(element => element !== elementToBeDeleted);
        setFavList(newFavList);
    }

    return (
        <div class={`p-4 bg-gray-800 text-white h-screen transition-width duration-500 ease-out flex-col flex right-0 ${!isOpen() ? "w-24" : "w-[400px]"}`}>
            <div class="flex mb-2 p-3 flex-row-reverse justify-around gap-8">
                <button class=" text-white" onClick={() => setIsOpen(!isOpen())}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="35px" height="35px" fill-rule="nonzero"><g fill="#d7d7d7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path></g></g></svg>
                </button>
                {isOpen() && <h1 class={`text-xl pt-0.5`}>Saved Links</h1>}
            </div>
            <div class={`flex flex-col align-baseline p-3 rounded-2xl border-2 gap-2 min-h-[3rem] ${isOpen() ? "overflow-y-scroll" : "overflow-hidden"} max-h-full`}>
                <For each={favList()}>
                    {
                        (entry, i) => (
                            <div class={`text-center text-lg bg-gray-700 rounded-sm ${!isOpen() && "invisible"}`}>
                                <a target="_blank" href={entry.url} class="link">{entry.name}</a>
                                {/* add fav symbol */}
                                    <svg onClick={removeFromFavList} />
                                {/* add fav symbol */}
                            </div>
                        )
                    }
                </For>
            </div>
        </div>
    );
}