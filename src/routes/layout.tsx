import {
  component$,
  Slot,
  useStore,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import { Navigation } from "../components/navigation/navigation";

import styles from "./styles.css?inline";
import { paletteNames } from "~/lib/palettes";
import { FooterBar } from "~/components/footer-bar/footer-bar";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const state = useStore({
    palette: paletteNames[0],
    dark: false,
  });
  useStyles$(styles);
  useVisibleTask$(async () => {
    document.body.setAttribute("data-theme", state.palette);
  });
  return (
    <>
      <Navigation />
      <main>
        <Slot />
      </main>
      <FooterBar state={state} />
    </>
  );
});
