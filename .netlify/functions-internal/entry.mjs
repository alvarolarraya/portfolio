import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_80e2b150.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_442ab39c.mjs';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_a1f4d448.mjs');
const _page1  = () => import('./chunks/index_86ca7bb4.mjs');
const _page2  = () => import('./chunks/19_computerStructures_b97b167c.mjs');
const _page3  = () => import('./chunks/13_schoolWebsite_7b1bf320.mjs');
const _page4  = () => import('./chunks/stringCalculator_274b591f.mjs');
const _page5  = () => import('./chunks/10_cryptoWallet_46953351.mjs');
const _page6  = () => import('./chunks/05_translator_2499220c.mjs');
const _page7  = () => import('./chunks/08_dataMining_3ace3a9c.mjs');
const _page8  = () => import('./chunks/11_battleship_cc6ad213.mjs');
const _page9  = () => import('./chunks/19_candyStore_fc42c973.mjs');
const _page10  = () => import('./chunks/11_portfolio_56b01bd9.mjs');
const _page11  = () => import('./chunks/12_nasapedia_62bc6bf0.mjs');
const _page12  = () => import('./chunks/12_ticTacToe_d39b12c0.mjs');
const _page13  = () => import('./chunks/15_flightWeb_1b13fab6.mjs');
const _page14  = () => import('./chunks/18_diabetes_e271e855.mjs');
const _page15  = () => import('./chunks/testDoubles_1fbfb3dc.mjs');
const _page16  = () => import('./chunks/19_hoodies_a00ba1e3.mjs');
const _page17  = () => import('./chunks/02_salary_a1c8aacd.mjs');
const _page18  = () => import('./chunks/07_vision_af4246b2.mjs');
const _page19  = () => import('./chunks/19_parser_10b20c47.mjs');
const _page20  = () => import('./chunks/19_python_d3df8558.mjs');
const _page21  = () => import('./chunks/01_coins_5ffb8f99.mjs');
const _page22  = () => import('./chunks/04_stars_d95f6696.mjs');
const _page23  = () => import('./chunks/19_cache_dc3595a8.mjs');
const _page24  = () => import('./chunks/10_bird_fc44826e.mjs');
const _page25  = () => import('./chunks/19_java_2c462afb.mjs');
const _page26  = () => import('./chunks/laravel_3535723d.mjs');
const _page27  = () => import('./chunks/03_tfg_2be13c0e.mjs');
const _page28  = () => import('./chunks/07_art_c3a6c488.mjs');
const _page29  = () => import('./chunks/08_nlp_82673491.mjs');
const _page30  = () => import('./chunks/09_sql_ca336892.mjs');
const _page31  = () => import('./chunks/matlab_e43f06e0.mjs');
const _page32  = () => import('./chunks/08_ml_9218195f.mjs');
const _page33  = () => import('./chunks/19_so_62537314.mjs');
const _page34  = () => import('./chunks/19_r_355ce83f.mjs');
const _page35  = () => import('./chunks/lisp_7c8bab05.mjs');
const _page36  = () => import('./chunks/ohce_d4606277.mjs');
const _page37  = () => import('./chunks/c_a5c2d60e.mjs');
const _page38  = () => import('./chunks/_.._13858b4b.mjs');
const _page39  = () => import('./chunks/about_7bbed01e.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/projects/19_computerStructures.md", _page2],["src/pages/projects/13_schoolWebsite.md", _page3],["src/pages/projects/stringCalculator.md", _page4],["src/pages/projects/10_cryptoWallet.md", _page5],["src/pages/projects/05_translator.md", _page6],["src/pages/projects/08_dataMining.md", _page7],["src/pages/projects/11_battleship.md", _page8],["src/pages/projects/19_candyStore.md", _page9],["src/pages/projects/11_portfolio.md", _page10],["src/pages/projects/12_nasapedia.md", _page11],["src/pages/projects/12_ticTacToe.md", _page12],["src/pages/projects/15_flightWeb.md", _page13],["src/pages/projects/18_diabetes.md", _page14],["src/pages/projects/testDoubles.md", _page15],["src/pages/projects/19_hoodies.md", _page16],["src/pages/projects/02_salary.md", _page17],["src/pages/projects/07_vision.md", _page18],["src/pages/projects/19_parser.md", _page19],["src/pages/projects/19_python.md", _page20],["src/pages/projects/01_coins.md", _page21],["src/pages/projects/04_stars.md", _page22],["src/pages/projects/19_cache.md", _page23],["src/pages/projects/10_bird.md", _page24],["src/pages/projects/19_java.md", _page25],["src/pages/projects/laravel.md", _page26],["src/pages/projects/03_tfg.md", _page27],["src/pages/projects/07_art.md", _page28],["src/pages/projects/08_nlp.md", _page29],["src/pages/projects/09_sql.md", _page30],["src/pages/projects/matlab.md", _page31],["src/pages/projects/08_ml.md", _page32],["src/pages/projects/19_so.md", _page33],["src/pages/projects/19_r.md", _page34],["src/pages/projects/lisp.md", _page35],["src/pages/projects/ohce.md", _page36],["src/pages/projects/c.md", _page37],["src/pages/projects/[...page].astro", _page38],["src/pages/about.astro", _page39]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
