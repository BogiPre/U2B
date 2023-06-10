import { For } from "solid-js";
import DownloadListEntry from "./DownloadListEntry";

interface DownloadListProps {
    downloadList: () => DownloadListEntry[];
    addToFavList: (event: MouseEvent) => void;
}

export default function DownloadList({ downloadList, addToFavList }: DownloadListProps) {

    return (
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
    );
}
