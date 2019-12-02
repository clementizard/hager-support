import { createGlobalStyle } from 'styled-components';

import {
	defaultNormal,
	defaultDark,
	errorNormal,
} from './Colors';
import Helvetica from '../../public/fonts/Helvetica/Helvetica.otf';
import HelveticaSvg from '../../public/fonts/Helvetica/Helvetica.svg';
import HelveticaBold from '../../public/fonts/Helvetica/Helvetica-Bold.otf';
import HelveticaBoldSvg from '../../public/fonts/Helvetica/Helvetica-Bold.svg';
import HelveticaLight from '../../public/fonts/Helvetica/Helvetica-Light.otf';
import HelveticaLightSvg from '../../public/fonts/Helvetica/Helvetica-Light.svg';
import HelveticaOblique from '../../public/fonts/Helvetica/Helvetica-Oblique.otf';
import HelveticaObliqueSvg from '../../public/fonts/Helvetica/Helvetica-Oblique.svg';

export default createGlobalStyle`
	@font-face {
		font-family: 'Helvetica';
		src:
		  url(${HelveticaSvg}) format('svg'),
		  url(${Helvetica}) format('opentype');
    font-display: swap;
	}
	@font-face {
		font-family: 'HelveticaBold';
		src:
		  url(${HelveticaBoldSvg}) format('svg'),
		  url(${HelveticaBold}) format('opentype');
    font-display: swap;
	}
	@font-face {
		font-family: 'HelveticaLight';
		src:
		  url(${HelveticaLightSvg}) format('svg'),
		  url(${HelveticaLight}) format('opentype');
    font-display: swap;
	}
	@font-face {
		font-family: 'HelveticaOblique';
		src:
		  url(${HelveticaObliqueSvg}) format('svg'),
		  url(${HelveticaOblique}) format('opentype');
    font-display: swap;
	}

	body {
		--default-normal: ${defaultNormal};
		--default-dark: ${defaultDark};
		--error-normal: ${errorNormal};
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
    font-family: 'Helvetica', 'Arial', sans-serif;

    --palette-primary-darken-6: rgba(0, 103, 181, 1);
    --palette-primary-darken-10: rgba(0, 91, 161, 1);
    --palette-primary-darkened-6: 0, 103, 181;
    --palette-primary-darkened-10: 0, 91, 161;
    --palette-primary-shade-30: 0, 69, 120;
    --palette-primary-shade-20: 0, 90, 158;
    --palette-primary-shade-10: 16, 110, 190;
    --palette-primary: 0, 120, 212;
    --palette-primary-tint-10: 43, 136, 216;
    --palette-primary-tint-20: 199, 224, 244;
    --palette-primary-tint-30: 222, 236, 249;
    --palette-primary-tint-40: 239, 246, 252;
    --palette-neutral-100: 0, 0, 0;
    --palette-neutral-80: 51, 51, 51;
    --palette-neutral-70: 76, 76, 76;
    --palette-neutral-60: 102, 102, 102;
    --palette-neutral-30: 166, 166, 166;
    --palette-neutral-20: 200, 200, 200;
    --palette-neutral-10: 218, 218, 218;
    --palette-neutral-8: 234, 234, 234;
    --palette-neutral-6: 239, 239, 239;
    --palette-neutral-4: 244, 244, 244;
    --palette-neutral-2: 248, 248, 248;
    --palette-neutral-0: 255, 255, 255;
    --palette-error: rgba(232, 17, 35, 1);
    --palette-error-6: rgba(203, 15, 31, 1);
    --palette-error-10: rgba(184, 14, 28, 1);
    --palette-black-alpha-0: rgba(var(--palette-neutral-100), 0);
    --palette-black-alpha-2: rgba(var(--palette-neutral-100), 0.02);
    --palette-black-alpha-4: rgba(var(--palette-neutral-100), 0.04);
    --palette-black-alpha-6: rgba(var(--palette-neutral-100), 0.06);
    --palette-black-alpha-8: rgba(var(--palette-neutral-100), 0.08);
    --palette-black-alpha-10: rgba(var(--palette-neutral-100), 0.10);
    --palette-black-alpha-20: rgba(var(--palette-neutral-100), 0.20);
    --palette-black-alpha-30: rgba(var(--palette-neutral-100), 0.30);
    --palette-black-alpha-60: rgba(var(--palette-neutral-100), 0.60);
    --palette-black-alpha-70: rgba(var(--palette-neutral-100), 0.70);
    --palette-black-alpha-80: rgba(var(--palette-neutral-100), 0.80);
    --palette-black-alpha-100: rgba(var(--palette-neutral-100), 1);
    --palette-accent1-light: 249, 235, 235;
    --palette-accent1: 218, 10, 0;
    --palette-accent1-dark: 168, 0, 0;
    --palette-accent2-light: 223, 246, 221;
    --palette-accent2: 186, 216, 10;
    --palette-accent2-dark: 16, 124, 16;
    --palette-accent3-light: 255, 244, 206;
    --palette-accent3: 248, 168, 0;
    --palette-accent3-dark: 220, 182, 122;
    --background-color: rgba(var(--palette-neutral-0), 1);
    --communication-foreground: rgba(var(--palette-primary-shade-20), 1);
    --communication-background: rgba(var(--palette-primary), 1);
    --status-info-foreground: rgb(0,90,180);
    --status-info-background: rgb(0,160,255);
    --status-error-foreground: rgba(205, 74, 69, 1);
    --status-error-background: rgba(var(--palette-accent1-light), 1);
    --status-error-background-alternative: rgb(253, 168, 156);
    --status-error-text: rgba(var(--palette-accent1), 1);
    --status-error-strong: rgba(var(--palette-accent1-dark), 1);
    --status-success-foreground: rgba(var(--palette-accent2-dark), 1);
    --status-success-background: rgba(var(--palette-accent2-light), 1);
    --status-warning-foreground: rgba(250, 157, 45, 1);
    --status-warning-background: rgba(var(--palette-accent3-light), 1);
    --status-warning-background-alternative: rgb(253, 236, 177);
    --text-primary-color: rgba(var(--palette-neutral-100), .9);
    --text-secondary-color: rgba(var(--palette-neutral-100), .55);
    --text-disabled-color: rgba(var(--palette-neutral-100), .38);
    --text-on-communication-background: var(--background-color);
    --border-subtle-color: rgba(var(--palette-neutral-100), .08);
    --callout-background-color: var(--background-color);
    --callout-filtered-background-color: rgba(var(--palette-neutral-0), 0.86);
    --callout-shadow-color: rgba(0, 0, 0, .132);
    --callout-shadow-secondary-color: rgba(0, 0, 0, .108);
    --panel-shadow-color: rgba(0, 0, 0, .22);
    --panel-shadow-secondary-color: rgba(0, 0, 0, .18);
    --focus-pulse-max-color: rgba(var(--palette-primary), 0.35);
    --focus-pulse-min-color: rgba(var(--palette-primary), 0.15);
    --third-party-icon-filter: none;
    --diff-color-original: rgba(172, 0, 0, 0.1);
    --diff-color-modified: rgba(51, 153, 51, 0.1);
    --component-label-default-color: rgba(var(--palette-neutral-6), 1);
    --component-label-default-color-hover: rgba(var(--palette-neutral-10), 1);
    --component-grid-row-hover-color: rgba(var(--palette-neutral-2), 1);
    --component-grid-selected-row-color: rgba(var(--palette-primary-tint-30), 1);
    --component-grid-focus-border-color: rgba(var(--palette-primary), 1);
    --component-grid-link-selected-row-color: rgba(var(--palette-primary-shade-10), 1);
    --component-grid-link-hover-color: rgba(var(--palette-primary-shade-20), 1);
    --component-grid-action-hover-color: rgba(var(--palette-neutral-8), 1);
    --component-grid-action-selected-cell-hover-color: rgba(var(--palette-primary-tint-30), 1);
    --component-grid-cell-bottom-border-color: rgba(var(--palette-neutral-8), 1);
    --component-grid-drag-source-color: rgba(var(--palette-neutral-0), 0.40);
    --search-match-background: rgba(255, 255, 0, 0.6);
    --search-selected-match-background: rgba(245, 139, 31, 0.8);
    --icon-folder-color: #dcb67a;
    --component-errorBoundary-border-color: rgba(var(--palette-accent1), 1);
    --component-errorBoundary-background-color: rgba(var(--palette-accent1-light), 1);
    --nav-header-background: var(--background-color);
    --nav-header-item-hover-background: rgba(var(--palette-neutral-100), 0.02);
    --nav-header-active-item-background: rgba(var(--palette-neutral-100), 0.08);
    --nav-header-text-primary-color: var(--text-primary-color);
    --nav-header-text-secondary-color: var(--text-secondary-color);
    --nav-header-text-disabled-color: var(--text-disabled-color);
    --nav-header-product-color: rgba(var(--palette-primary), 1);
    --nav-vertical-background-color: rgba(var(--palette-neutral-8), 1);
    --nav-vertical-item-hover-background: rgba(var(--palette-neutral-100), 0.04);
    --nav-vertical-active-group-background: rgba(var(--palette-neutral-100), 0.06);
    --nav-vertical-active-item-background: rgba(var(--palette-neutral-100), 0.12);
    --nav-vertical-text-primary-color: var(--text-primary-color);
    --nav-vertical-text-secondary-color: var(--text-secondary-color);
    --component-menu-selected-item-background: rgba(var(--palette-neutral-4), 1);
    --component-htmlEditor-background-color: var(--background-color);
    --component-htmlEditor-foreground-color: var(--text-primary-color);
	}
`;
