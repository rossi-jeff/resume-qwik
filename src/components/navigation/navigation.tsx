import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

type LinkType = {
  name: string;
  path: string;
};

export const Navigation = component$(() => {
  const links: LinkType[] = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Employment", path: "/employment" },
    { name: "Contact", path: "/contact" },
    { name: "References", path: "/references" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Resume", path: "/download" },
    { name: "Links", path: "/links" },
  ];
  return (
    <div class="flex flex-wrap justify-between mx-2">
      {links.map((link, idx) => (
        <Link key={idx} href={link.path}>
          {link.name}
        </Link>
      ))}
    </div>
  );
});
