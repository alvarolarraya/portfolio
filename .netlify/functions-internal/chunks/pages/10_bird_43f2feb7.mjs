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

				const html = updateImageReferences("<h2 class=\"projectTitles\">What's all this about? 🧙🏻‍♀️🆚🐦‍⬛</h2>\n<div><p><b>Wriggly Warty Witch</b> is a computer web game. The goal is to kill the witch controlling a bird able to shoot syringes. Although be careful, in the process you will encounter some obstacles: blowing clouds and warts thrown by the witch. Picturesque? You're right, the topics were chosen randomly. The target was to mix: warts, syringes and the sky, this is the result.</p></div>\n<h2 class=\"projectTitles\">Controls</h2>\n<div>\n  <p id=\"list\"> ⦿ The bird can <b>move</b> freely througout the whole screen using ←↑↓→ keys</p>\n  <p id=\"list\"> ⦿ Pressing or holding the space key you can <b>shoot</b> the syringes. The shooting action has cooldown time.</p>\n</div>\n<h2 class=\"projectTitles\">Play it yourself 🫵</h2>\n<div>\n  <a id=\"playLink\" href=\"https://fb55f3f8.bird-game.pages.dev/\" target=\"_blank\">\n    🎮\n  </a>\n</div>\n<h2 class=\"projectTitles\">Implementation  👨🏻‍💻</h2>\n<div>\n  <p>This web game is coded in <b>JavaScript</b> as an <b>Object Oriented Program</b>. All the animations are made with canvas, inserting a new picture 60 times per second. Making it <b>resposive</b> to the player´s actions in real time, which are monitorized during the whole battle. To see the code firsthand click on the demo at the top of the web.</p>\n</div>\n<link href=\"https://fonts.googleapis.com/css?family=Caveat\" rel=\"stylesheet\">\n<style>\n  .projectTitles{\n    text-align: center;\n    font-size: 6rem;\n    display: block;\n    margin: 0 auto;\n    width: 70%;   \n    line-height: 4rem; \n    font-family: \"Caveat\";\n    padding-bottom:2vh;\n    margin-bottom:4vh;\n    border-bottom: 3px rgb(var(--accent)) dashed;\n    margin-top:15vh;\n  }\n  p{\n    text-align: center;\n    font-size: 3rem;\n    display: block;\n    margin: 0 auto;\n    width: 70%;   \n    line-height: 4rem; \n    font-family: \"Caveat\";\n    margin-top:2vh;\n  }\n  b{\n    font-size: 4rem;\n    background-color: #2E2E2E;\n  }\n  #playLink{\n    text-align: center;\n    font-size: 10rem;\n    display: block;\n    margin: 0 auto;\n    width: 70%;   \n    text-decoration: none;\n    animation: hithere 2.5s infinite;\n  }\n  @keyframes hithere {\n    30% { transform: scale(1.2); }\n    40%, 60% { transform: rotate(-20deg) scale(1.2); }\n    50% { transform: rotate(20deg) scale(1.2); }\n    70% { transform: rotate(0deg) scale(1.2); }\n    100% { transform: scale(1); }\n  }\n  #list{\n    text-align: left;\n    padding-left:10vw;\n    padding-top:1vh;\n  }\n  @media only screen and (max-width: 1200px){\n\t\tth{\n      font-size:2.5rem;\n    }\n    td{\n      font-size:2rem;\n    }\n    .projectTitles{\n      font-size:5rem;\n      line-height:6rem;\n    }\n    li{\n      padding-left:15vw;\n    }\n    ul{\n      text-align: -webkit-center;\n      font-size: 2.5rem;  \n      line-height: 4rem; \n      font-family: \"Caveat\";\n      margin-top:2vh;\n      list-style-type: none;\n    }\n    .subList{\n      padding-left:25vw;\n    }\n    p{\n      font-size: 2.5rem;\n      line-height: 4rem; \n    }\n    b{\n      font-size: 3rem;\n      background-color: #2E2E2E;\n    }\n\t}\n  @media only screen and (max-width: 600px){\n\t\tth{\n      font-size:1rem;\n    }\n    td{\n      font-size:1rem;\n    }\n    .projectTitles{\n      font-size:2rem;\n      line-height:3rem;\n    }\n    li{\n      padding-left:10vw;\n    }\n    ul{\n      text-align: -webkit-center;\n      font-size: 1rem;  \n      line-height: 2rem; \n      font-family: \"Caveat\";\n      margin-top:2vh;\n      list-style-type: none;\n    }\n    .subList{\n      padding-left:20vw;\n    }\n    p{\n      font-size: 1rem;\n      line-height: 2rem; \n    }\n    b{\n      font-size: 1.5rem;\n      background-color: #2E2E2E;\n    }\n\t}\n</style>");

				const frontmatter = {"layout":"../../layouts/ProjectsLayout.astro","title":"Wriggly warty witch","image":"/imgs/demoBird.gif","transition_image":"bird_img","transition_title":"bird_ttl","description":"A simple computer web game consisting of a battle between a bird and a witch","github":"https://github.com/alvarolarraya/bird_game","cardNumber":4,"aiRelated":false,"hasDedicatedPage":true};
				const file = "/Users/alvar/Desktop/portfolio/src/pages/projects/10_bird.md";
				const url = "/projects/10_bird";
				function rawContent() {
					return "<h2 class=\"projectTitles\">What's all this about? 🧙🏻‍♀️🆚🐦‍⬛</h2>\n\n<div><p><b>Wriggly Warty Witch</b> is a computer web game. The goal is to kill the witch controlling a bird able to shoot syringes. Although be careful, in the process you will encounter some obstacles: blowing clouds and warts thrown by the witch. Picturesque? You're right, the topics were chosen randomly. The target was to mix: warts, syringes and the sky, this is the result.</p></div>\n\n\n<h2 class=\"projectTitles\">Controls</h2>\n\n<div>\n  <p id=\"list\"> ⦿ The bird can <b>move</b> freely througout the whole screen using ←↑↓→ keys</p>\n\n  <p id=\"list\"> ⦿ Pressing or holding the space key you can <b>shoot</b> the syringes. The shooting action has cooldown time.</p>\n</div>\n\n<h2 class=\"projectTitles\">Play it yourself 🫵</h2>\n\n<div>\n  <a id=\"playLink\" href=\"https://fb55f3f8.bird-game.pages.dev/\" target=\"_blank\">\n    🎮\n  </a>\n</div>\n\n\n<h2 class=\"projectTitles\">Implementation  👨🏻‍💻</h2>\n\n<div>\n  <p>This web game is coded in <b>JavaScript</b> as an <b>Object Oriented Program</b>. All the animations are made with canvas, inserting a new picture 60 times per second. Making it <b>resposive</b> to the player´s actions in real time, which are monitorized during the whole battle. To see the code firsthand click on the demo at the top of the web.</p>\n</div>\n\n\n\n\n\n\n\n\n<link href='https://fonts.googleapis.com/css?family=Caveat' rel='stylesheet'>\n<style>\n  .projectTitles{\n    text-align: center;\n    font-size: 6rem;\n    display: block;\n    margin: 0 auto;\n    width: 70%;   \n    line-height: 4rem; \n    font-family: \"Caveat\";\n    padding-bottom:2vh;\n    margin-bottom:4vh;\n    border-bottom: 3px rgb(var(--accent)) dashed;\n    margin-top:15vh;\n  }\n  p{\n    text-align: center;\n    font-size: 3rem;\n    display: block;\n    margin: 0 auto;\n    width: 70%;   \n    line-height: 4rem; \n    font-family: \"Caveat\";\n    margin-top:2vh;\n  }\n  b{\n    font-size: 4rem;\n    background-color: #2E2E2E;\n  }\n  #playLink{\n    text-align: center;\n    font-size: 10rem;\n    display: block;\n    margin: 0 auto;\n    width: 70%;   \n    text-decoration: none;\n    animation: hithere 2.5s infinite;\n  }\n  @keyframes hithere {\n    30% { transform: scale(1.2); }\n    40%, 60% { transform: rotate(-20deg) scale(1.2); }\n    50% { transform: rotate(20deg) scale(1.2); }\n    70% { transform: rotate(0deg) scale(1.2); }\n    100% { transform: scale(1); }\n  }\n  #list{\n    text-align: left;\n    padding-left:10vw;\n    padding-top:1vh;\n  }\n  @media only screen and (max-width: 1200px){\n\t\tth{\n      font-size:2.5rem;\n    }\n    td{\n      font-size:2rem;\n    }\n    .projectTitles{\n      font-size:5rem;\n      line-height:6rem;\n    }\n    li{\n      padding-left:15vw;\n    }\n    ul{\n      text-align: -webkit-center;\n      font-size: 2.5rem;  \n      line-height: 4rem; \n      font-family: \"Caveat\";\n      margin-top:2vh;\n      list-style-type: none;\n    }\n    .subList{\n      padding-left:25vw;\n    }\n    p{\n      font-size: 2.5rem;\n      line-height: 4rem; \n    }\n    b{\n      font-size: 3rem;\n      background-color: #2E2E2E;\n    }\n\t}\n  @media only screen and (max-width: 600px){\n\t\tth{\n      font-size:1rem;\n    }\n    td{\n      font-size:1rem;\n    }\n    .projectTitles{\n      font-size:2rem;\n      line-height:3rem;\n    }\n    li{\n      padding-left:10vw;\n    }\n    ul{\n      text-align: -webkit-center;\n      font-size: 1rem;  \n      line-height: 2rem; \n      font-family: \"Caveat\";\n      margin-top:2vh;\n      list-style-type: none;\n    }\n    .subList{\n      padding-left:20vw;\n    }\n    p{\n      font-size: 1rem;\n      line-height: 2rem; \n    }\n    b{\n      font-size: 1.5rem;\n      background-color: #2E2E2E;\n    }\n\t}\n</style>";
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
