import { onCleanup } from "solid-js";
import { createSignal } from "solid-js";
import { For } from "solid-js";
import { useNavigate, useLocation } from "@solidjs/router";

export class FavListEntry {
    public name: string;
    public url: string;
    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}

export const [favList, setFavList] = createSignal(new Array<FavListEntry>());

export default function FavList() {
    const [isOpen, setIsOpen] = createSignal(false);
    const location = useLocation();

    setFavList(JSON.parse(localStorage.getItem("savedLinks") ?? "[]"));

    const removeFromFavList = (event: MouseEvent) => {
        let svg = event.currentTarget as HTMLElement;
        const anchor = svg.parentElement?.querySelector("a") as HTMLAnchorElement;
        const elementToBeDeleted = favList().find(element => element.url == anchor.href);
        const newFavList = favList().filter(element => element !== elementToBeDeleted);
        setFavList(newFavList);
        localStorage.setItem("savedLinks", JSON.stringify(favList()));
    }

    return (
        <div class={`p-4  text-white h-screen duration-500 ease-out flex-col flex right-0 truncate ${!isOpen() ? "opacity-100 sm:w-24 sm:bg-gray-800 absolute sm:relative" : "absolute sm:relative w-full sm:w-[400px] bg-gray-800"} ${location.pathname === '/' ? "hidden" : "visible"}`}>
            <div class="flex mb-2 p-3 flex-row-reverse justify-around gap-8">
                <button class=" text-white" onClick={() => setIsOpen(!isOpen())}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="35px" height="35px" fill-rule="nonzero"><g fill="#d7d7d7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path></g></g></svg>
                </button>
                {isOpen() && <h1 class={`text-xl pt-0.5`}>Saved Links</h1>}
            </div>
            <div class={`flex flex-col align-baseline p-3 rounded-2xl border-2 gap-2 min-h-[3rem] ${isOpen() ? "overflow-y-auto" : "overflow-hidden hidden sm:visible"} max-h-full`}>
                <For each={favList()}>
                    {
                        (entry, i) => (
                            <div class={`flex gap-5 p-3 justify-between text-center text-lg bg-gray-700 rounded-sm ${!isOpen() && "invisible"}`}>
                                <a target="_blank" href={entry.url} class="link">{entry.name.slice(0, 12) + (entry.name.length > 12 ? "..." : "")}</a>
                                <svg onClick={removeFromFavList} xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="32px" height="32px" fill-rule="nonzero">
                                    <g fill="#d7d7d7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                        <g transform="scale(8,8)">
                                            <path d="M13.59375,4l-0.3125,0.28125l-0.71875,0.71875h-6.5625v2h1v18c0,1.64453 1.35547,3 3,3h12c1.64453,0 3,-1.35547 3,-3v-18h1v-2h-6.5625l-0.71875,-0.71875l-0.3125,-0.28125zM14.4375,6h3.125l0.71875,0.71875l0.3125,0.28125h4.40625v18c0,0.55469 -0.44531,1 -1,1h-12c-0.55469,0 -1,-0.44531 -1,-1v-18h4.40625l0.3125,-0.28125zM11,11v11h2v-11zM15,11v11h2v-11zM19,11v11h2v-11z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        )
                    }
                </For>
            </div>
        </div>
    );
}