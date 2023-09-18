import { isRemotePath, joinPaths } from '@astrojs/internal-helpers/path';
import { A as AstroError, E as ExpectedImage, L as LocalImageUsedWrongly, M as MissingImageDimension, U as UnsupportedImageFormat, I as InvalidImageService, a as ExpectedImageOptions, c as createAstro, b as createComponent, d as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, f as renderComponent, g as renderHead, h as renderSlot, u as unescapeHTML } from '../astro_442ab39c.mjs';
/* empty css                              *//* empty css                              */import { atom } from 'nanostores';

const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];

function isLocalService(service) {
  if (!service) {
    return false;
  }
  return "transform" in service;
}
function parseQuality(quality) {
  let result = parseInt(quality);
  if (Number.isNaN(result)) {
    return quality;
  }
  return result;
}
const baseService = {
  validateOptions(options) {
    if (!options.src || typeof options.src !== "string" && typeof options.src !== "object") {
      throw new AstroError({
        ...ExpectedImage,
        message: ExpectedImage.message(
          JSON.stringify(options.src),
          typeof options.src,
          JSON.stringify(options, (_, v) => v === void 0 ? null : v)
        )
      });
    }
    if (!isESMImportedImage(options.src)) {
      if (options.src.startsWith("/@fs/") || !isRemotePath(options.src) && !options.src.startsWith("/")) {
        throw new AstroError({
          ...LocalImageUsedWrongly,
          message: LocalImageUsedWrongly.message(options.src)
        });
      }
      let missingDimension;
      if (!options.width && !options.height) {
        missingDimension = "both";
      } else if (!options.width && options.height) {
        missingDimension = "width";
      } else if (options.width && !options.height) {
        missingDimension = "height";
      }
      if (missingDimension) {
        throw new AstroError({
          ...MissingImageDimension,
          message: MissingImageDimension.message(missingDimension, options.src)
        });
      }
    } else {
      if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) {
        throw new AstroError({
          ...UnsupportedImageFormat,
          message: UnsupportedImageFormat.message(
            options.src.format,
            options.src.src,
            VALID_SUPPORTED_FORMATS
          )
        });
      }
      if (options.src.format === "svg") {
        options.format = "svg";
      }
    }
    if (!options.format) {
      options.format = "webp";
    }
    return options;
  },
  getHTMLAttributes(options) {
    let targetWidth = options.width;
    let targetHeight = options.height;
    if (isESMImportedImage(options.src)) {
      const aspectRatio = options.src.width / options.src.height;
      if (targetHeight && !targetWidth) {
        targetWidth = Math.round(targetHeight * aspectRatio);
      } else if (targetWidth && !targetHeight) {
        targetHeight = Math.round(targetWidth / aspectRatio);
      } else if (!targetWidth && !targetHeight) {
        targetWidth = options.src.width;
        targetHeight = options.src.height;
      }
    }
    const { src, width, height, format, quality, ...attributes } = options;
    return {
      ...attributes,
      width: targetWidth,
      height: targetHeight,
      loading: attributes.loading ?? "lazy",
      decoding: attributes.decoding ?? "async"
    };
  },
  getURL(options, imageConfig) {
    const searchParams = new URLSearchParams();
    if (isESMImportedImage(options.src)) {
      searchParams.append("href", options.src.src);
    } else if (isRemoteAllowed(options.src, imageConfig)) {
      searchParams.append("href", options.src);
    } else {
      return options.src;
    }
    const params = {
      w: "width",
      h: "height",
      q: "quality",
      f: "format"
    };
    Object.entries(params).forEach(([param, key]) => {
      options[key] && searchParams.append(param, options[key].toString());
    });
    const imageEndpoint = joinPaths("/", "/_image");
    return `${imageEndpoint}?${searchParams}`;
  },
  parseURL(url) {
    const params = url.searchParams;
    if (!params.has("href")) {
      return void 0;
    }
    const transform = {
      src: params.get("href"),
      width: params.has("w") ? parseInt(params.get("w")) : void 0,
      height: params.has("h") ? parseInt(params.get("h")) : void 0,
      format: params.get("f"),
      quality: params.get("q")
    };
    return transform;
  }
};

function matchPattern(url, remotePattern) {
  return matchProtocol(url, remotePattern.protocol) && matchHostname(url, remotePattern.hostname, true) && matchPort(url, remotePattern.port) && matchPathname(url, remotePattern.pathname, true);
}
function matchPort(url, port) {
  return !port || port === url.port;
}
function matchProtocol(url, protocol) {
  return !protocol || protocol === url.protocol.slice(0, -1);
}
function matchHostname(url, hostname, allowWildcard) {
  if (!hostname) {
    return true;
  } else if (!allowWildcard || !hostname.startsWith("*")) {
    return hostname === url.hostname;
  } else if (hostname.startsWith("**.")) {
    const slicedHostname = hostname.slice(2);
    return slicedHostname !== url.hostname && url.hostname.endsWith(slicedHostname);
  } else if (hostname.startsWith("*.")) {
    const slicedHostname = hostname.slice(1);
    const additionalSubdomains = url.hostname.replace(slicedHostname, "").split(".").filter(Boolean);
    return additionalSubdomains.length === 1;
  }
  return false;
}
function matchPathname(url, pathname, allowWildcard) {
  if (!pathname) {
    return true;
  } else if (!allowWildcard || !pathname.endsWith("*")) {
    return pathname === url.pathname;
  } else if (pathname.endsWith("/**")) {
    const slicedPathname = pathname.slice(0, -2);
    return slicedPathname !== url.pathname && url.pathname.startsWith(slicedPathname);
  } else if (pathname.endsWith("/*")) {
    const slicedPathname = pathname.slice(0, -1);
    const additionalPathChunks = url.pathname.replace(slicedPathname, "").split("/").filter(Boolean);
    return additionalPathChunks.length === 1;
  }
  return false;
}

function isESMImportedImage(src) {
  return typeof src === "object";
}
function isRemoteImage(src) {
  return typeof src === "string";
}
function isRemoteAllowed(src, {
  domains = [],
  remotePatterns = []
}) {
  if (!isRemotePath(src))
    return false;
  const url = new URL(src);
  return domains.some((domain) => matchHostname(url, domain)) || remotePatterns.some((remotePattern) => matchPattern(url, remotePattern));
}
async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../sharp_7da84869.mjs'
    ).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && // If `getURL` returned the same URL as the user provided, it means the service doesn't need to do anything
  !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions);
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    attributes: service.getHTMLAttributes !== void 0 ? service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$6 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`;
}, "/Users/alvar/Desktop/portfolio/node_modules/astro/components/Image.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$5 = createAstro();
const $$MenuItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MenuItem;
  const { href, title, emoji } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-jrov5ssf><a${addAttribute(href, "href")} data-astro-cid-jrov5ssf><h2 data-astro-cid-jrov5ssf>${emoji}<span id="text" data-astro-cid-jrov5ssf>${title}</span></h2></a></li>`;
}, "/Users/alvar/Desktop/portfolio/src/components/MenuItem.astro", void 0);

const $$Astro$4 = createAstro();
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead()}<label data-astro-cid-3weo6hls><input type="checkbox" data-astro-cid-3weo6hls><span class="menu" data-astro-cid-3weo6hls><span class="hamburger" data-astro-cid-3weo6hls></span></span><ul data-astro-cid-3weo6hls>${renderComponent($$result, "MenuItem", $$MenuItem, { "href": "/", "title": "Home", "emoji": "\u{1F3E0}", "data-astro-cid-3weo6hls": true })}${renderComponent($$result, "MenuItem", $$MenuItem, { "href": "/projects/", "title": "Projects", "emoji": "\u{1F468}\u{1F3FB}\u200D\u{1F4BB}", "data-astro-cid-3weo6hls": true })}${renderComponent($$result, "MenuItem", $$MenuItem, { "href": "/about/", "title": "About me", "emoji": "\u{1F64B}\u{1F3FB}\u200D\u2642\uFE0F", "data-astro-cid-3weo6hls": true })}</ul></label>`;
}, "/Users/alvar/Desktop/portfolio/src/components/Hamburger.astro", void 0);

const $$Astro$3 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Contact;
  const { github, linkedin, email } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="contact" data-astro-cid-xmivup5a><a${addAttribute(github, "href")} target="_blank" title="github" data-astro-cid-xmivup5a><svg xmlns="http://www.w3.org/2000/svg" width="4%" height="4%" class="bi bi-github" viewBox="0 0 16 16" data-astro-cid-xmivup5a><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-astro-cid-xmivup5a></path></svg></a><a${addAttribute(linkedin, "href")} target="_blank" title="linkedin" data-astro-cid-xmivup5a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-astro-cid-xmivup5a><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" data-astro-cid-xmivup5a></path></svg></a><a${addAttribute(email, "href")} target="_blank" title="send me an email" data-astro-cid-xmivup5a><svg xmlns="http://www.w3.org/2000/svg" width="4%" height="4%" class="bi bi-envelope-at-fill" viewBox="0 0 16 16" data-astro-cid-xmivup5a><path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" data-astro-cid-xmivup5a></path><path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" data-astro-cid-xmivup5a></path></svg></a></div>`;
}, "/Users/alvar/Desktop/portfolio/src/components/Contact.astro", void 0);

const $$Astro$2 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { github, linkedin, email } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="navbar" data-astro-cid-5blmo7yk><div class="contact" data-astro-cid-5blmo7yk>${renderComponent($$result, "Contact", $$Contact, { "linkedin": linkedin, ";": true, "github": github, ";": true, "email": email, ";": true, "data-astro-cid-5blmo7yk": true })}</div><div id="menu" data-astro-cid-5blmo7yk>${renderComponent($$result, "Hamburger", $$Hamburger, { "data-astro-cid-5blmo7yk": true })}</div></div>`;
}, "/Users/alvar/Desktop/portfolio/src/components/Navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$BackArrow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BackArrow;
  const { link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} data-astro-cid-eb5zkzwd><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-arrow-left" viewBox="0 0 16 16" data-astro-cid-eb5zkzwd><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" data-astro-cid-eb5zkzwd></path></svg></a>`;
}, "/Users/alvar/Desktop/portfolio/src/components/BackArrow.astro", void 0);

const currentPage = atom(0);

const $$Astro = createAstro();
const $$ProjectsLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectsLayout;
  const { frontmatter } = Astro2.props;
  const { title, description, image, transition_image, transition_title, github, cardNumber } = frontmatter;
  var transition = "view-transition-name:" + transition_image;
  var title_transition = "view-transition-name:" + transition_title;
  var linkBack;
  if (currentPage.get() == 1) {
    linkBack = "/projects/#" + cardNumber;
  } else {
    linkBack = "/projects/" + currentPage.get() + "#" + cardNumber;
  }
  return renderTemplate`<html lang="en" data-astro-cid-jf37aiux><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/imgs/me.webp"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderHead()}</head><body data-astro-cid-jf37aiux><header data-astro-cid-jf37aiux>${renderComponent($$result, "Navbar", $$Navbar, { "github": "https://github.com/alvarolarraya", ";": true, "linkedin": "https://linkedin.com/in/\xE1lvaro-larraya-830700240", ";": true, "email": "https://mail.google.com/mail/?view=cm&fs=1&to=alvaro.larraya1@gmail.com", ";": true, "data-astro-cid-jf37aiux": true })}${renderComponent($$result, "ScrollArrow", null, { "down": "#content", "up": "#", "client:only": "react", "client:component-hydration": "only", "data-astro-cid-jf37aiux": true, "client:component-path": "/Users/alvar/Desktop/portfolio/src/components/ScrollArrow.jsx", "client:component-export": "default" })}<div id="title" data-astro-cid-jf37aiux>${renderComponent($$result, "BackArrow", $$BackArrow, { "link": linkBack, ";": true, "data-astro-cid-jf37aiux": true })}<h1 id="topHeader"${addAttribute(title_transition, "style")} data-astro-cid-jf37aiux>${title}</h1></div></header><div id="divPhoto" data-astro-cid-jf37aiux><a id="githubLink"${addAttribute(github, "href")} target="_blank" data-astro-cid-jf37aiux><img id="projectImage"${addAttribute(image, "src")} alt=""${addAttribute(transition, "style")} data-astro-cid-jf37aiux><svg id="githubIcon" xmlns="http://www.w3.org/2000/svg" class="bi bi-github" viewBox="0 0 16 16" data-astro-cid-jf37aiux><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-astro-cid-jf37aiux></path></svg></a></div><div id="content" data-astro-cid-jf37aiux>${renderSlot($$result, $$slots["default"])}</div></body></html>`;
}, "/Users/alvar/Desktop/portfolio/src/layouts/ProjectsLayout.astro", void 0);

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h2 class=\"projectTitles\">Index</h2>\n<ul>\n  <li> ⦿ <a href=\"#generalExplanation\">What's all this about? 😶</a></li>\n  <li> ⦿ <a href=\"#dataset\">Dataset</a></li>\n  <li> ⦿ <a href=\"#approaches\">Preprocessing approaches</a></li>\n    <li class=\"subList\"> ⦾ <a href=\"#hog\">HOG</a></li>\n    <li class=\"subList\"> ⦾ <a href=\"#adaptativeEq\">Adaptative equalization</a></li>\n    <li class=\"subList\"> ⦾ <a href=\"#kmeans\">K-means</a></li>\n    <li class=\"subList\"> ⦾ <a href=\"#edgeEnhancement\">Edge enhancement</a></li>\n    <li class=\"subList\"> ⦾ <a href=\"#mathematicalMorfology\">Mathematical morfology</a></li>\n  <li> ⦿ <a href=\"#svm\">Model structure</a></li>\n  <li> ⦿ <a href=\"#implementation\">Implementation  👨🏻‍💻</a></li>\n</ul>\n<h2 id=\"generalExplanation\">What's all this about? 😶</h2>\n<div><p>A groupal university project I made with a collegue. The main goal is the development, training, and validation of a system for detecting and <b>classifying coins</b>. We took part in this <a href=\"https://www.kaggle.com/competitions/vision-artificial-upna2021-clasificacion-monedas\" target=\"_blank\">kaggle competition</a>. There are <b>8 different classes</b>: 1 cént, 2 cents, 5 cents, 10 cens, 20 cens, 50 cens, 1 euro and 2 euros</p></div>\n<h2 id=\"dataset\">Dataset</h2>\n<div><p>We had <b>1291</b> coin's pictures <b>to train</b> and <b>964 to test</b> our model. All the photos are <b>150x150</b> with <b>salt and pepper noise</b>.</p></div>\n<h2 id=\"approaches\">Preprocessing approaches</h2>\n<ul>\n  <li> ⦿ HOG</li>\n  <li> ⦿ Adaptative equalization</li>\n  <li> ⦿ Kmeans</li>\n  <li> ⦿ Edge enhancement</li>\n  <li> ⦿ Mathematical morphology</li>\n</ul>\n<h3 id=\"hog\">HOG</h3>\n<div>\n  <p><b>Histogram of Oriented Gradients</b> is a feature extraction technique. From an image we obtain a series of vectors that help us to identify which is the most common pattern of shapes in each area of the image.</p>\n  <img id=\"hogScheme\" src=\"/imgs/hogScheme.webp\">\n  <div class=\"centerImgDiv\">\n    <img class=\"coinsImages\" src=\"/imgs/50cents.webp\">\n    <img class=\"coinsImages\" src=\"/imgs/hog.webp\">\n  </div>\n</div>\n<h3 id=\"adaptativeEq\">Adaptative equalization</h3>\n<div>\n  <p>To increase the dynamic range and since the image is not equally illuminated in all areas, we decided to use adaptive equalization.</p>\n  <div class=\"centerImgDiv\">\n    <img class=\"comparisonImg\" src=\"/imgs/adaptativeEq.webp\">\n  </div>\n</div>\n<h3 id=\"kmeans\">K-means</h3>\n<div>\n  <p>As the HOG feature extractor focused much more than we would like on the background we decided remove the background and give it the coin color.</p>\n  <div class=\"centerImgDiv\">\n    <img class=\"comparisonImg\" src=\"/imgs/kmeans.webp\">\n  </div>\n</div>\n<h3 id=\"edgeEnhancement\">Edge enhancement</h3>\n<div>\n  <p>Although we ended up discounting this idea, because it didn't bring us the results we wanted, it was worth a try. It involves highlighting the borders for the model to identificate them more easily.</p>\n  <div class=\"centerImgDiv\">\n    <img class=\"comparisonImg\" src=\"/imgs/coins.webp\">\n  </div>\n</div>\n<h3 id=\"mathematicalMorfology\">Mathematical morfology</h3>\n<div>\n  <p>Advanced morphological transformations using an erosion and dilation as basic operations. We also discarded this approach.</p>\n  <div class=\"centerImgDiv\">\n    <img class=\"comparisonImg\" src=\"/imgs/mathematicalMorfology.webp\">\n  </div>\n</div>\n<h2 id=\"svm\">Model structure</h2>\n<div>\n  <p>Support Vector Machine better known as SVM is a supervised learning algorithm, the goal is to find a hyperplane that best separates two different classes of data points. We tried a variety of algorithms and SVMs was the one that worked best for us.</p>\n  <div class=\"centerImgDiv\">\n    <img id=\"svmImg\" class=\"comparisonImg\" src=\"/imgs/svm.webp\">\n  </div>\n</div>\n<h2 id=\"implementation\">Implementation  👨🏻‍💻</h2>\n<div>\n  <p>This models are made with <b>Scikit Learn</b> and <b>OpenCV</b>. To see the code firsthand click on the image at the top of the page.</p>\n</div>\n<link href=\"https://fonts.googleapis.com/css?family=Caveat\" rel=\"stylesheet\">\n<style>\n  h2{\n    text-align: center;\n    font-size: 6rem;\n    display: block;\n    margin: 0 auto;\n    width: 70%;   \n    line-height: 4rem; \n    font-family: \"Caveat\";\n    padding-bottom:2vh;\n    margin-bottom:4vh;\n    border-bottom: 3px rgb(var(--accent)) dashed;\n    margin-top:15vh;\n  }\n  p{\n    text-align: center;\n    font-size: 3rem;\n    display: block;\n    margin: 0 auto;\n    width: 70%;   \n    line-height: 4rem; \n    font-family: \"Caveat\";\n    margin-top:4vh;\n  }\n  b{\n    font-size: 4rem;\n    background-color: #2E2E2E;\n  }\n  li{\n    text-align: left;\n    padding-left:30vw;\n    padding-top:1vh;\n  }\n  img{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top:2vh;\n    width: 75vw;\n  }\n  ul{\n    text-align: -webkit-center;\n    font-size: 3rem;  \n    line-height: 4rem; \n    font-family: \"Caveat\";\n    margin-top:2vh;\n    list-style-type: none;\n  }\n  a{\n    color: rgb(var(--accent));\n  }\n  .subList{\n    padding-left:40vw;\n  }\n  h3{\n    text-align: center;\n    font-size: 5rem;\n    display: block;\n    margin: 0 auto;\n    width: 50%;   \n    line-height: 4rem; \n    font-family: \"Caveat\";\n    padding-bottom:2vh;\n    margin-bottom:4vh;\n    border-bottom: 3px #990000 dashed;\n    margin-top:15vh;\n  }\n  table {\n    margin-left:auto; \n    margin-right:auto;\n    font-size: 3rem;\n    line-height: 4rem; \n    font-family: \"Caveat\";\n    margin-top:10vh;    \n  }\n  th,td{\n    border: 2px solid #990000;\n    text-align: -webkit-center;\n    width:1%;\n  }\n  .emptyTableCell{\n    border:0;\n  }\n  th{\n    font-size: 4rem;\n  }\n  #titleTable{\n    text-decoration:underline;\n  }\n  table{\n    width:70vw;\n  }\n  #hogScheme{\n    padding: 5vw;\n    aspect-ratio: 16/9;\n  }\n  .coinsImages{\n    width:20vw;\n    border-radius: 0.6rem;\n    display:inline;\n    margin:5vw;\n    background-position: center;\n  }\n  .centerImgDiv{\n    display: flex;\n    justify-content: center;\n  }\n  .comparisonImg{\n    width:50vw;\n    margin: 5vw;\n    border-radius: 0.6rem;\n  }\n  #svmImg{\n    background-color:white;\n  }\n  @media only screen and (max-width: 1200px){\n\t\tth{\n      font-size:2.5rem;\n    }\n    td{\n      font-size:2rem;\n    }\n    h2,h3{\n      font-size:5rem;\n    }\n    li{\n      padding-left:15vw;\n    }\n    ul{\n      text-align: -webkit-center;\n      font-size: 2.5rem;  \n      line-height: 4rem; \n      font-family: \"Caveat\";\n      margin-top:2vh;\n      list-style-type: none;\n    }\n    .subList{\n      padding-left:25vw;\n    }\n    p{\n      font-size: 2.5rem;\n      line-height: 4rem; \n    }\n    b{\n      font-size: 3rem;\n      background-color: #2E2E2E;\n    }\n\t}\n  @media only screen and (max-width: 600px){\n\t\tth{\n      font-size:1rem;\n    }\n    td{\n      font-size:1rem;\n    }\n    h2,h3{\n      font-size:2rem;\n    }\n    li{\n      padding-left:10vw;\n    }\n    ul{\n      text-align: -webkit-center;\n      font-size: 1rem;  \n      line-height: 2rem; \n      font-family: \"Caveat\";\n      margin-top:2vh;\n      list-style-type: none;\n    }\n    .subList{\n      padding-left:20vw;\n    }\n    p{\n      font-size: 1rem;\n      line-height: 2rem; \n    }\n    b{\n      font-size: 1.5rem;\n      background-color: #2E2E2E;\n    }\n\t}\n</style>");

				const frontmatter = {"layout":"../../layouts/ProjectsLayout.astro","title":"Coin's value classification","image":"/imgs/coins.webp","transition_image":"coins_img","transition_title":"coins_ttl","description":"Using computer vision skills","github":"https://github.com/alvarolarraya/CoinClassification","cardNumber":2,"aiRelated":true,"hasDedicatedPage":true};
				const file = "/Users/alvar/Desktop/portfolio/src/pages/projects/01_coins.md";
				const url = "/projects/01_coins";
				function rawContent() {
					return "<h2 class=\"projectTitles\">Index</h2>\n<ul>\n  <li> ⦿ <a href=\"#generalExplanation\">What's all this about? 😶</a></li>\n  <li> ⦿ <a href=\"#dataset\">Dataset</a></li>\n  <li> ⦿ <a href=\"#approaches\">Preprocessing approaches</a></li>\n    <li class=\"subList\"> ⦾ <a href=\"#hog\">HOG</a></li>\n    <li class=\"subList\"> ⦾ <a href=\"#adaptativeEq\">Adaptative equalization</a></li>\n    <li class=\"subList\"> ⦾ <a href=\"#kmeans\">K-means</a></li>\n    <li class=\"subList\"> ⦾ <a href=\"#edgeEnhancement\">Edge enhancement</a></li>\n    <li class=\"subList\"> ⦾ <a href=\"#mathematicalMorfology\">Mathematical morfology</a></li>\n  <li> ⦿ <a href=\"#svm\">Model structure</a></li>\n  <li> ⦿ <a href=\"#implementation\">Implementation  👨🏻‍💻</a></li>\n</ul>\n\n<h2 id=\"generalExplanation\">What's all this about? 😶</h2>\n\n<div><p>A groupal university project I made with a collegue. The main goal is the development, training, and validation of a system for detecting and <b>classifying coins</b>. We took part in this <a href=\"https://www.kaggle.com/competitions/vision-artificial-upna2021-clasificacion-monedas\" target=\"_blank\">kaggle competition</a>. There are <b>8 different classes</b>: 1 cént, 2 cents, 5 cents, 10 cens, 20 cens, 50 cens, 1 euro and 2 euros</p></div>\n\n<h2 id=\"dataset\">Dataset</h2>\n\n<div><p>We had <b>1291</b> coin's pictures <b>to train</b> and <b>964 to test</b> our model. All the photos are <b>150x150</b> with <b>salt and pepper noise</b>.</p></div>\n\n<h2 id=\"approaches\">Preprocessing approaches</h2>\n\n<ul>\n  <li> ⦿ HOG</li>\n  <li> ⦿ Adaptative equalization</li>\n  <li> ⦿ Kmeans</li>\n  <li> ⦿ Edge enhancement</li>\n  <li> ⦿ Mathematical morphology</li>\n</ul>\n\n<h3 id=\"hog\">HOG</h3>\n\n<div>\n  <p><b>Histogram of Oriented Gradients</b> is a feature extraction technique. From an image we obtain a series of vectors that help us to identify which is the most common pattern of shapes in each area of the image.</p>\n  <img id=\"hogScheme\" src=\"/imgs/hogScheme.webp\">\n  <div class=\"centerImgDiv\">\n    <img class=\"coinsImages\" src=\"/imgs/50cents.webp\">\n    <img class=\"coinsImages\" src=\"/imgs/hog.webp\">\n  </div>\n</div>\n\n<h3 id=\"adaptativeEq\">Adaptative equalization</h3>\n\n<div>\n  <p>To increase the dynamic range and since the image is not equally illuminated in all areas, we decided to use adaptive equalization.</p>\n  <div class=\"centerImgDiv\">\n    <img class=\"comparisonImg\" src=\"/imgs/adaptativeEq.webp\">\n  </div>\n</div>\n\n<h3 id=\"kmeans\">K-means</h3>\n\n<div>\n  <p>As the HOG feature extractor focused much more than we would like on the background we decided remove the background and give it the coin color.</p>\n  <div class=\"centerImgDiv\">\n    <img class=\"comparisonImg\" src=\"/imgs/kmeans.webp\">\n  </div>\n</div>\n\n<h3 id=\"edgeEnhancement\">Edge enhancement</h3>\n\n<div>\n  <p>Although we ended up discounting this idea, because it didn't bring us the results we wanted, it was worth a try. It involves highlighting the borders for the model to identificate them more easily.</p>\n  <div class=\"centerImgDiv\">\n    <img class=\"comparisonImg\" src=\"/imgs/coins.webp\">\n  </div>\n</div>\n\n<h3 id=\"mathematicalMorfology\">Mathematical morfology</h3>\n\n<div>\n  <p>Advanced morphological transformations using an erosion and dilation as basic operations. We also discarded this approach.</p>\n  <div class=\"centerImgDiv\">\n    <img class=\"comparisonImg\" src=\"/imgs/mathematicalMorfology.webp\">\n  </div>\n</div>\n\n<h2 id=\"svm\">Model structure</h2>\n\n<div>\n  <p>Support Vector Machine better known as SVM is a supervised learning algorithm, the goal is to find a hyperplane that best separates two different classes of data points. We tried a variety of algorithms and SVMs was the one that worked best for us.</p>\n  <div class=\"centerImgDiv\">\n    <img id=\"svmImg\" class=\"comparisonImg\" src=\"/imgs/svm.webp\">\n  </div>\n</div>\n\n\n<h2 id=\"implementation\">Implementation  👨🏻‍💻</h2>\n\n<div>\n  <p>This models are made with <b>Scikit Learn</b> and <b>OpenCV</b>. To see the code firsthand click on the image at the top of the page.</p>\n</div>\n\n\n\n\n\n\n\n\n<link href='https://fonts.googleapis.com/css?family=Caveat' rel='stylesheet'>\n<style>\n  h2{\n    text-align: center;\n    font-size: 6rem;\n    display: block;\n    margin: 0 auto;\n    width: 70%;   \n    line-height: 4rem; \n    font-family: \"Caveat\";\n    padding-bottom:2vh;\n    margin-bottom:4vh;\n    border-bottom: 3px rgb(var(--accent)) dashed;\n    margin-top:15vh;\n  }\n  p{\n    text-align: center;\n    font-size: 3rem;\n    display: block;\n    margin: 0 auto;\n    width: 70%;   \n    line-height: 4rem; \n    font-family: \"Caveat\";\n    margin-top:4vh;\n  }\n  b{\n    font-size: 4rem;\n    background-color: #2E2E2E;\n  }\n  li{\n    text-align: left;\n    padding-left:30vw;\n    padding-top:1vh;\n  }\n  img{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top:2vh;\n    width: 75vw;\n  }\n  ul{\n    text-align: -webkit-center;\n    font-size: 3rem;  \n    line-height: 4rem; \n    font-family: \"Caveat\";\n    margin-top:2vh;\n    list-style-type: none;\n  }\n  a{\n    color: rgb(var(--accent));\n  }\n  .subList{\n    padding-left:40vw;\n  }\n  h3{\n    text-align: center;\n    font-size: 5rem;\n    display: block;\n    margin: 0 auto;\n    width: 50%;   \n    line-height: 4rem; \n    font-family: \"Caveat\";\n    padding-bottom:2vh;\n    margin-bottom:4vh;\n    border-bottom: 3px #990000 dashed;\n    margin-top:15vh;\n  }\n  table {\n    margin-left:auto; \n    margin-right:auto;\n    font-size: 3rem;\n    line-height: 4rem; \n    font-family: \"Caveat\";\n    margin-top:10vh;    \n  }\n  th,td{\n    border: 2px solid #990000;\n    text-align: -webkit-center;\n    width:1%;\n  }\n  .emptyTableCell{\n    border:0;\n  }\n  th{\n    font-size: 4rem;\n  }\n  #titleTable{\n    text-decoration:underline;\n  }\n  table{\n    width:70vw;\n  }\n  #hogScheme{\n    padding: 5vw;\n    aspect-ratio: 16/9;\n  }\n  .coinsImages{\n    width:20vw;\n    border-radius: 0.6rem;\n    display:inline;\n    margin:5vw;\n    background-position: center;\n  }\n  .centerImgDiv{\n    display: flex;\n    justify-content: center;\n  }\n  .comparisonImg{\n    width:50vw;\n    margin: 5vw;\n    border-radius: 0.6rem;\n  }\n  #svmImg{\n    background-color:white;\n  }\n  @media only screen and (max-width: 1200px){\n\t\tth{\n      font-size:2.5rem;\n    }\n    td{\n      font-size:2rem;\n    }\n    h2,h3{\n      font-size:5rem;\n    }\n    li{\n      padding-left:15vw;\n    }\n    ul{\n      text-align: -webkit-center;\n      font-size: 2.5rem;  \n      line-height: 4rem; \n      font-family: \"Caveat\";\n      margin-top:2vh;\n      list-style-type: none;\n    }\n    .subList{\n      padding-left:25vw;\n    }\n    p{\n      font-size: 2.5rem;\n      line-height: 4rem; \n    }\n    b{\n      font-size: 3rem;\n      background-color: #2E2E2E;\n    }\n\t}\n  @media only screen and (max-width: 600px){\n\t\tth{\n      font-size:1rem;\n    }\n    td{\n      font-size:1rem;\n    }\n    h2,h3{\n      font-size:2rem;\n    }\n    li{\n      padding-left:10vw;\n    }\n    ul{\n      text-align: -webkit-center;\n      font-size: 1rem;  \n      line-height: 2rem; \n      font-family: \"Caveat\";\n      margin-top:2vh;\n      list-style-type: none;\n    }\n    .subList{\n      padding-left:20vw;\n    }\n    p{\n      font-size: 1rem;\n      line-height: 2rem; \n    }\n    b{\n      font-size: 1.5rem;\n      background-color: #2E2E2E;\n    }\n\t}\n</style>";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$ProjectsLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _01_coins = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  images,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ProjectsLayout as $, _01_coins as _, $$Navbar as a, isRemoteAllowed as b, currentPage as c, baseService as d, getConfiguredImageService as g, imageConfig as i, parseQuality as p };
