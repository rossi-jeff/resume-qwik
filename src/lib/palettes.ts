export type PaletteType = {
  [key: string]: {
    light: string;
    dark: string;
    "alt-light": string;
    "alt-dark": string;
  };
};
// from https://www.canva.com/colors/color-palettes/
export const palettes: PaletteType = {
	"Bittersweet-Blues": {
    light: "#D3D2C7",
    dark: "#5B89AE",
    "alt-light": "#ADC4D7",
    "alt-dark": "#CB8E66",
  },
  "Milky-Stream": {
    light: "#FFFFFF",
    dark: "#13292A",
    "alt-light": "#E7DED9",
    "alt-dark": "#988780",
  },
	"Autumn-Crush": {
    light: "#EFCFA0",
    dark: "#532200",
    "alt-light": "#E1A140",
    "alt-dark": "#914110",
  },
  "Bare-Beauty": {
    light: "#EDF2F3",
    dark: "#1F3541",
    "alt-light": "#AFD8F2",
    "alt-dark": "#5289B5",
  },
  "Ocean-Threads": {
    light: "#E1E7E0",
    dark: "#2B4560",
    "alt-light": "#6AA4B0",
    "alt-dark": "#2F6D80",
  },
	"Lavender-Horizon": {
    light: "#B9A7BB",
    dark: "#323B36",
    "alt-light": "#616C59",
    "alt-dark": "#603F8B",
  },
  "Swiftness-of-Water": {
    light: "#CCE0D2",
    dark: "#1D617A",
    "alt-light": "#61C2A2",
    "alt-dark": "#2C8395",
  },
  /*
  "": {
    light: "",
    dark: "",
    "alt-light": "",
    "alt-dark": "",
  },
  */
};

export const paletteNames = Object.keys(palettes);
