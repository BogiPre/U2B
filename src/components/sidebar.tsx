import { createSignal } from "solid-js";
import { NavLink } from "@solidjs/router";

export default function Sidebar() {
  const [isOpen, setIsOpen] = createSignal(true);

  return (
    <>
      <div class={`p-4 bg-gray-800 text-white h-screen transition-width duration-500 relative ease-out truncate ${!isOpen() ? "w-[4rem]" : "w-[20rem]"}`}>
        <div class="flex mb-2">
          <button class=" text-white" onClick={() => setIsOpen(!isOpen())}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="35px" height="35px" fill-rule="nonzero"><g fill="#d7d7d7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path></g></g></svg>
          </button>
          {isOpen() &&<h1 class={`text-xl ml-4 pt-0.5 overflow-visible}`}>Convert Video or Playlist!</h1>}
        </div>
        <ul class="text-lg pt-2 transition-all duration-300">
          <li class="mb-2">
            <NavLink
              href="/"
              class="cursor-pointer text-white"
              activeClass="font-bold"
              end={true}
            >
              <div class="flex"><img src="src/assets/cube.png" class="w-7 h-7"/> {isOpen() && <p class={`pl-3`}>Landing Page</p>}</div> 
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/inputbox"
              class="cursor-pointer text-white"
              activeClass="font-bold"
            >
              <div class="flex"><img src="src/assets/sound.png" class="w-8 h-8"/> {isOpen() &&<p class={`pl-2`}>MP3 Converter</p>}</div> 
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
