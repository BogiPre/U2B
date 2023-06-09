import { createSignal } from "solid-js";
import { NavLink } from "@solidjs/router";
import QualitySelect from "./qualitySelect"
import { useNavigate, useLocation } from "@solidjs/router";

export default function Sidebar() {
  const [isOpen, setIsOpen] = createSignal(false);
  const [selectedOption, setSelectedOption] = createSignal("");
  const handleChange = (event: { target: { value: any; }; }) => {
    setSelectedOption(event.target.value);
  };
  const location = useLocation();

  return (
    <>
      <div class={`p-4 bg-gray-800 text-white h-screen duration-500 truncate flex-shrink-0 relative ease-out flex-col flex ${!isOpen() ? "w-[95px]" : "w-[400px]"}`}>
        <div class="flex mb-2 pt-3 justify-around">
          <button class=" text-white" onClick={() => setIsOpen(!isOpen())}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="35px" height="35px" fill-rule="nonzero"><g fill="#d7d7d7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path></g></g></svg>
          </button>
          {isOpen() && <h1 class={`text-xl pt-0.5`}>Select Options!</h1>}
        </div>
        <div class="text-lg gap-5 flex flex-col justify-evenly h-full">
          <div class="border p-3 rounded-2xl">
            <NavLink
              href="/"
              class="cursor-pointer text-white"
              activeClass="font-bold"
              end={true}
            >
              <div class={`flex ${!isOpen() ? "justify-center" : ""}`}>
                <img src="src/assets/cube.png" class="w-8 h-7 pl-0.5" /> 
                {isOpen() && <p class={`pl-3`}>Landing Page</p>}
                </div>
            </NavLink>
          </div>
          
          <div class="border-t mx-2"></div>
          <div class="border p-2 rounded-2xl flex flex-col gap-2">
            <div>
              <NavLink href="/mp3" class="cursor-pointer text-white" activeClass="font-bold">
                <div class={`flex ${!isOpen() ? "justify-center" : ""}`}>
                  <img src="src/assets/sound.png" class="w-9 h-8 pl-1" /> 
                  {isOpen() && <p class={`pl-2`}>MP3 Converter</p>}
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink
                href="/mp4" class="cursor-pointer text-white" activeClass="font-bold">
                <div class={`flex ${!isOpen() ? "justify-center" : ""}`}>
                  <img src="src/assets/video.png" class="w-9 h-8 pl-1" />
                  {isOpen() && <p class={`pl-3`}>MP4 Converter</p>}
                </div>
              </NavLink>
            </div>
          </div>
          <div class={`border-b mx-2 ${/*location.pathname === '/' || location.pathname === '/mp3' ? "hidden" : "visible"*/ ""}`}></div>
          <div class={` ${location.pathname === '/' || location.pathname === '/mp3' ? /*"hidden"*/ "invisible" : "visible"}`}>
            <QualitySelect value={isOpen()} />
          </div>
        </div>
      </div>
    </>
  );
}
