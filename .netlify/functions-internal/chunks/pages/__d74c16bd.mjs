import { c as createAstro, b as createComponent, r as renderTemplate, e as addAttribute, g as renderHead, h as renderSlot, i as defineStyleVars, m as maybeRenderHead, f as renderComponent } from '../astro_442ab39c.mjs';
/* empty css                           *//* empty css                               */import { c as currentPage, a as $$Navbar } from './01_coins_4a1e200e.mjs';

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Hi i'm Álvaro Larraya and this is my portfolio"><meta name="viewport" content="width=device-width"><link rel="icon" href="/imgs/me.webp"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/alvar/Desktop/portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body, image_path, transition_image, transition_title, card, aiRelated, github, hasDedicatedPage } = Astro2.props;
  var hoverColorBeginning, hoverColorFinal;
  if (hasDedicatedPage) {
    hoverColorBeginning = "255, 80, 80";
    hoverColorFinal = "#990000";
  } else {
    hoverColorBeginning = "255, 255, 255";
    hoverColorFinal = "rgb(255, 255, 255)";
  }
  var transition = "view-transition-name:" + transition_image;
  var title_transition = "view-transition-name:" + transition_title;
  const $$definedVars = defineStyleVars([{ hoverColorBeginning, hoverColorFinal }]);
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(card, "id")} class="link-card" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}><a${addAttribute(hasDedicatedPage ? href : github, "href")}${addAttribute(!hasDedicatedPage ? "__blank" : "", "target")} data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}>${aiRelated ? renderTemplate`<p class="cardBadge" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}><b data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}>AI<br data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}>related</b></p>` : renderTemplate`<p id="aiRelatedBadge" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}></p>`}<h2${addAttribute(`${title_transition}; ${$$definedVars}`, "style")} data-astro-cid-dohjnao5>${title}</h2><p data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}>${body}</p><br data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}><img${addAttribute(image_path, "src")} alt=""${addAttribute(`${transition}; ${$$definedVars}`, "style")} data-astro-cid-dohjnao5></a></li>`;
}, "/Users/alvar/Desktop/portfolio/src/components/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { total, currentPage } = Astro2.props;
  let pageNumbers = Array.from({ length: total - 1 }, (x, i) => i);
  return renderTemplate`${maybeRenderHead()}<div id="paginationDiv" data-astro-cid-d776pwuy>${currentPage == 1 ? renderTemplate`<p id="firstPage" class="currentPage" data-astro-cid-d776pwuy>1</p>` : renderTemplate`<a id="firstPage" href="/projects/" data-astro-cid-d776pwuy>1</a>`}${pageNumbers.map((pageNumber) => currentPage == pageNumber + 2 ? renderTemplate`<p class="currentPage" data-astro-cid-d776pwuy>${pageNumber + 2}</p>` : renderTemplate`<a${addAttribute("/projects/" + (pageNumber + 2), "href")} data-astro-cid-d776pwuy>${pageNumber + 2}</a>`)}</div><br data-astro-cid-d776pwuy>`;
}, "/Users/alvar/Desktop/portfolio/src/components/Pagination.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const Astro = $$Astro;
async function getStaticPaths({ paginate }) {
  const projects = await Astro.glob(/* #__PURE__ */ Object.assign({"./01_coins.md": () => import('./01_coins_4a1e200e.mjs').then(n => n._),"./02_salary.md": () => import('./02_salary_4ee678e3.mjs'),"./03_tfg.md": () => import('./03_tfg_89088e6b.mjs'),"./04_stars.md": () => import('./04_stars_d2d77e92.mjs'),"./05_translator.md": () => import('./05_translator_e1038beb.mjs'),"./07_art.md": () => import('./07_art_466b3195.mjs'),"./07_vision.md": () => import('./07_vision_0e5e3187.mjs'),"./08_dataMining.md": () => import('./08_dataMining_d88eb577.mjs'),"./08_ml.md": () => import('./08_ml_68234187.mjs'),"./08_nlp.md": () => import('./08_nlp_3032523d.mjs'),"./09_sql.md": () => import('./09_sql_cea97a37.mjs'),"./10_bird.md": () => import('./10_bird_43f2feb7.mjs'),"./10_cryptoWallet.md": () => import('./10_cryptoWallet_6c4527ce.mjs'),"./11_battleship.md": () => import('./11_battleship_520ed4e5.mjs'),"./11_portfolio.md": () => import('./11_portfolio_1df979d1.mjs'),"./12_nasapedia.md": () => import('./12_nasapedia_580e582d.mjs'),"./12_ticTacToe.md": () => import('./12_ticTacToe_f97c3752.mjs'),"./13_schoolWebsite.md": () => import('./13_schoolWebsite_c06824b9.mjs'),"./15_flightWeb.md": () => import('./15_flightWeb_6bf14380.mjs'),"./18_diabetes.md": () => import('./18_diabetes_10ede834.mjs'),"./19_cache.md": () => import('./19_cache_680a692f.mjs'),"./19_candyStore.md": () => import('./19_candyStore_f0c07bfe.mjs'),"./19_computerStructures.md": () => import('./19_computerStructures_73b838ce.mjs'),"./19_hoodies.md": () => import('./19_hoodies_9da8adec.mjs'),"./19_java.md": () => import('./19_java_6d2bc7e1.mjs'),"./19_parser.md": () => import('./19_parser_d79bf4cb.mjs'),"./19_python.md": () => import('./19_python_910f77cf.mjs'),"./19_r.md": () => import('./19_r_64367331.mjs'),"./19_so.md": () => import('./19_so_0f91bdae.mjs'),"./c.md": () => import('./c_6f66d505.mjs'),"./laravel.md": () => import('./laravel_c7ad60eb.mjs'),"./lisp.md": () => import('./lisp_131e1cae.mjs'),"./matlab.md": () => import('./matlab_6349977b.mjs'),"./ohce.md": () => import('./ohce_94c48b1e.mjs'),"./stringCalculator.md": () => import('./stringCalculator_883dace5.mjs'),"./testDoubles.md": () => import('./testDoubles_dc4a7a69.mjs')}), () => "./*.md");
  return paginate(projects, {
    pageSize: 10
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  currentPage.set(page.currentPage);
  return renderTemplate(_a || (_a = __template(["", '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.1.9/sweetalert2.min.css" integrity="sha512-cyIcYOviYhF0bHIhzXWJQ/7xnaBuIIOecYoPZBgJHQKFPo+TOBA+BY1EnTpmM8yKDU4ZdI3UGccNGCEUdfbBqw==" crossorigin="anonymous" referrerpolicy="no-referrer"><script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.1.9/sweetalert2.all.min.js" integrity="sha512-IZ95TbsPTDl3eT5GwqTJH/14xZ2feLEGJRbII6bRKtE/HC6x3N4cHye7yyikadgAsuiddCY2+6gMntpVHL1gHw==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Alvaro Larraya's projects", "data-astro-cid-mjvr6czp": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "github": "https://github.com/alvarolarraya", ";": true, "linkedin": "https://linkedin.com/in/\xE1lvaro-larraya-830700240", ";": true, "email": "https://mail.google.com/mail/?view=cm&fs=1&to=alvaro.larraya1@gmail.com", ";": true, "data-astro-cid-mjvr6czp": true })}${maybeRenderHead()}<main data-astro-cid-mjvr6czp><h1 data-astro-cid-mjvr6czp>PROJECTS</h1><p data-astro-cid-mjvr6czp><i data-astro-cid-mjvr6czp>What better way to certificate skills than by showing examples using it?</i></p><br data-astro-cid-mjvr6czp>${renderComponent($$result2, "ScrollArrow", null, { "down": "#cards", "up": "#", "client:only": "react", "client:component-hydration": "only", "data-astro-cid-mjvr6czp": true, "client:component-path": "/Users/alvar/Desktop/portfolio/src/components/ScrollArrow.jsx", "client:component-export": "default" })}${renderComponent($$result2, "Pagination", $$Pagination, { "total": page.lastPage, "currentPage": page.currentPage, "data-astro-cid-mjvr6czp": true })}<ul role="list" class="link-card-grid" id="cards" data-astro-cid-mjvr6czp>${page.data.map(
    (project) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "card": project.frontmatter.cardNumber, "href": project.url, "title": project.frontmatter.title, "body": project.frontmatter.description, "image_path": project.frontmatter.image, "transition_image": project.frontmatter.transition_image, "transition_title": project.frontmatter.transition_title, "aiRelated": project.frontmatter.aiRelated, "hasDedicatedPage": project.frontmatter.hasDedicatedPage, "github": project.frontmatter.github, "data-astro-cid-mjvr6czp": true })}`
  )}</ul></main>` }));
}, "/Users/alvar/Desktop/portfolio/src/pages/projects/[...page].astro", void 0);

const $$file = "/Users/alvar/Desktop/portfolio/src/pages/projects/[...page].astro";
const $$url = "/projects/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, ____page_ as _ };
