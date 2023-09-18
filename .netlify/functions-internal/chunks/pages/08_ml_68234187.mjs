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

				const frontmatter = {"layout":"../../layouts/ProjectsLayout.astro","title":"ML exercises","image":"/imgs/ml.webp","transition_image":"ml_img","transition_title":"ml_ttl","description":"Machine Learning exercises","github":"https://github.com/alvarolarraya/MachineLearningExercises","cardNumber":29,"aiRelated":true};
				const file = "/Users/alvar/Desktop/portfolio/src/pages/projects/08_ml.md";
				const url = "/projects/08_ml";
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
