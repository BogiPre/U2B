import { createSignal } from "solid-js";
import { NavLink } from "@solidjs/router";
import QualitySelect from "../components/qualitySelect"

export default function Sidebar() {
  const [isOpen, setIsOpen] = createSignal(true);
  const [selectedOption, setSelectedOption] = createSignal("");
  const handleChange = (event: { target: { value: any; }; }) => {
    setSelectedOption(event.target.value);
  };


  return (
    <>
      <div class={`p-4 bg-gray-800 text-white h-screen transition-width duration-500 relative ease-out truncate flex-col flex ${!isOpen() ? "w-[5.8rem]" : "w-[22rem]"}`}>
        <div class="flex mb-2">
          <button class=" text-white" onClick={() => setIsOpen(!isOpen())}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="35px" height="35px" fill-rule="nonzero"><g fill="#d7d7d7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path></g></g></svg>
          </button>
          {isOpen() && <h1 class={`text-xl ml-4 pt-0.5 overflow-visible}`}>Convert Video or Playlist!</h1>}
        </div>
        <div class="text-lg gap-5 flex flex-col justify-evenly h-full">
          <div class="border p-3 rounded-2xl">
            <NavLink
              href="/"
              class="cursor-pointer text-white"
              activeClass="font-bold"
              end={true}
            >
              <div class="flex"><img src="src/assets/cube.png" class="w-8 h-7 pl-0.5" /> {isOpen() && <p class={`pl-3`}>Landing Page</p>}</div>
            </NavLink>
          </div>
          
          <div class="border-t mx-2"></div>
          <div class="border p-2 rounded-2xl flex flex-col gap-2">
            <div >
              <NavLink
                href="/mp3"
                class="cursor-pointer text-white"
                activeClass="font-bold"
              >
                <div class="flex"><img src="src/assets/sound.png" class="w-9 h-8 pl-1" /> {isOpen() && <p class={`pl-2`}>MP3 Converter</p>}</div>
              </NavLink>
            </div>
            <div>
              <NavLink
                href="/mp4"
                class="cursor-pointer text-white"
                activeClass="font-bold"
              >
                <div class="flex"><img src="src/assets/video.png" class="w-9 h-8 pl-1" /> {isOpen() && <p class={`pl-3`}>MP4 Converter</p>}</div>
              </NavLink>
            </div>
          </div>
          <div class="border-b mx-2"></div>
          <div class="">
            <QualitySelect value={isOpen()} />
          </div>
        </div>
      </div>
    </>
  );
}
