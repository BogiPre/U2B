import { createSignal } from "solid-js";


export default function qualitySelect(props: any) {
    const [selectedOption, setSelectedOption] = createSignal("");
  
    const options = [
        { name: "Low", icon: "src/assets/low.svg" },
        { name: "Medium", icon: "src/assets/med.svg" },
        { name: "High", icon: "src/assets/high.svg" },
      ];
    

    return (
        <>
        <div class={`text-center font-bold ${!props.value ? "opacity-0" : "opacity-100"}`}>Quality</div>
      <div class="flex flex-col border border-gray-200 rounded-2xl p-1 my-2">
        {options.map((option) => (
          <button
            class={`p-2 ${selectedOption() === option.name ? 'bg-gray-600 text-white rounded-2xl' : ''}`}
            onClick={() => setSelectedOption(option.name)}
          >
            <div class="flex"> <img src={`${option.icon}`} class="w-8 stroke-[#D7D7D7]"></img>  {props.value && <p class={`pl-3`}>{option.name}</p>}</div>
          </button>
        ))}
      </div>
      </>
    );
  }
  