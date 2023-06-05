import { NavLink } from "@solidjs/router";

export default function Sidebar() {
  return (
    <div class="w-1/4 p-4 bg-gray-800 text-white h-screen">
      <h1 class="text-xl mb-4">Solid.js & Tailwind</h1>
      <ul>
        <li class="mb-2">
          <NavLink
            href="/"
            class="cursor-pointer text-white"
            activeClass="font-bold"
            end={true}
          >
            Landing Page
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/inputbox"
            class="cursor-pointer text-white"
            activeClass="font-bold"
          >
            Input Box Page
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
