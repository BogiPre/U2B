import { createSignal } from "solid-js";
import { For } from "solid-js";

class FavListEntry {
    public name: string;
    public url: string;
    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}

export default function FavList() {
    const [isOpen, setIsOpen] = createSignal(true);
    const [favList, setFavList] = createSignal(new Array<FavListEntry>());

    return (
        <div class={`p-4 bg-gray-800 text-white h-screen transition-width duration-500 ease-out flex-col flex right-0 ${!isOpen() ? "w-24" : "w-[400px]"}`}>
            <div class="flex mb-2 p-3 flex-row-reverse justify-around gap-8">
                <button class=" text-white" onClick={() => setIsOpen(!isOpen())}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="35px" height="35px" fill-rule="nonzero"><g fill="#d7d7d7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path></g></g></svg>
                </button>
                {isOpen() && <h1 class={`text-xl pt-0.5`}>Saved Links</h1>}
            </div>
            <div class="flex bg-gray-700">
                <For each={favList()}>
                    {
                        (entry, i) => (
                            <a target="_blank" href={entry.url}>entry.name</a>
                        )
                    }
                </For>
            </div>
        </div>
    );
}