export type PaletteType = {
  [key: string]: {
    light: string;
    dark: string;
    "alt-light": string;
    "alt-dark": string;
  };
};

export const palettes: PaletteType = {
  "Milky-Stream": {
    light: "#FFFFFF",
    dark: "#13292A",
    "alt-light": "#E7DED9",
    "alt-dark": "#988780",
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
  "Autumn-Crush": {
    light: "#EFCFA0",
    dark: "#532200",
    "alt-light": "#E1A140",
    "alt-dark": "#914110",
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
