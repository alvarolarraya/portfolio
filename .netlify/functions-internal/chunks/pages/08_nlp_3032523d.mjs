import { b as createComponent, s as spreadAttributes, r as renderTemplate, f as renderComponent, u as unescapeHTML } from '../astro_442ab39c.mjs';
import { $ as $$ProjectsLayout } from './01_coins_4a1e200e.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
/* empty css                              *//* empty css                              */import 'nanostores';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("");

				const frontmatter = {"layout":"../../layouts/ProjectsLayout.astro","title":"NLP exercises","image":"/imgs/nlp.webp","transition_image":"nlp_img","transition_title":"nlp_ttl","description":"Varied Natural Language Processing exercises","github":"https://github.com/alvarolarraya/NLPexercises","cardNumber":25,"aiRelated":true};
				const file = "/Users/alvar/Desktop/portfolio/src/pages/projects/08_nlp.md";
				const url = "/projects/08_nlp";
				function rawContent() {
					return "";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
