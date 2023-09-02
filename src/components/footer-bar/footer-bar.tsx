import { component$, $ } from "@builder.io/qwik";
import { paletteNames } from "~/lib/palettes";

export interface FooterBarProps {
  state: {
    palette: string;
    dark: boolean;
  };
}

export const FooterBar = component$<FooterBarProps>((props) => {
  const { palette, dark } = props.state;

  const paletteChanged = $((e: { target: { value: string } }) => {
    const name = e.target.value;
    props.state.palette = name;
    document.body.setAttribute("data-theme", name);
  });

  const darkChanged = $((e: { target: { checked: boolean } }) => {
    const isDark = e.target.checked;
    props.state.dark = isDark;
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
  return (
    <div class="flex flex-wrap">
      <div class="mr-2">
        <label for="paletteName" class="mr-2">
          Palette
        </label>
        <select
          name="paletteName"
          id="paletteName"
          value={palette}
          onChange$={paletteChanged}
        >
          {paletteNames.map((p, i) => (
            <option key={i} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input
          type="checkbox"
          name="darkCB"
          checked={dark}
          value={1}
          onChange$={darkChanged}
        />
        <label for="darkCB" class="ml-1">
          Dark
        </label>
      </div>
    </div>
  );
});
