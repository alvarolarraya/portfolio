import { c as createAstro, b as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_442ab39c.mjs';
import { $ as $$Layout } from './__d74c16bd.mjs';
import { a as $$Navbar } from './01_coins_4a1e200e.mjs';
/* empty css                           */import 'html-escaper';
/* empty css                           *//* empty css                               */import '@astrojs/internal-helpers/path';
/* empty css                              *//* empty css                              */import 'nanostores';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Alvaro Larraya's portfolio", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "github": "https://github.com/alvarolarraya", ";": true, "linkedin": "https://linkedin.com/in/\xE1lvaro-larraya-830700240", ";": true, "email": "https://mail.google.com/mail/?view=cm&fs=1&to=alvaro.larraya1@gmail.com", ";": true, "data-astro-cid-j7pv25f6": true })}${maybeRenderHead()}<main data-astro-cid-j7pv25f6><video id="videoPc" loop plays-inline controls controlslist="nodownload" disablepictureinpicture data-astro-cid-j7pv25f6><source src="/videos/welcome.mp4" type="video/mp4" data-astro-cid-j7pv25f6></video></main>` })}`;
}, "/Users/alvar/Desktop/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/alvar/Desktop/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
