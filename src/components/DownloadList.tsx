import { For } from "solid-js";
import DownloadListEntry from "./DownloadListEntry";

interface DownloadListProps {
    downloadList: () => DownloadListEntry[];
    addToFavList: (event: MouseEvent) => void;
}

export default function DownloadList({ downloadList, addToFavList }: DownloadListProps) {

    return (
<div class="flex flex-col max-w-full min-w-[20rem] gap-6 align-baseline p-5 rounded-md border-2 border-gray-200 min-h-[3rem] overflow-y-scroll max-h-64 shadow-md">
    <For each={downloadList()}>
        {
            (entry, i) => (
                <div class="flex justify-between items-center gap-6 bg-white p-4 rounded-md shadow-sm">
                    <div class="flex items-center">
                        <a class="hover:text-blue-600" target="_blank" href={entry.url}><i class="fas fa-download mr-3 text-blue-500"></i>{entry.name}</a>
                    </div>
                    <svg onClick={addToFavList} aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="hover:text-red-500 cursor-pointer">
                        <path fill="currentColor" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
                    </svg>
                </div>
            )
        }
    </For>
</div>

    );
}
