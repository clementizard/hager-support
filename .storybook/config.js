import { configure, addParameters, addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';

import AddonReactDocgen from 'storybook-addon-react-docgen';
console.log('****************************************', AddonReactDocgen);
addDecorator(AddonReactDocgen.withPropsTable);

addParameters({
	options: {
		theme: themes.dark,
	},
});

configure(require.context('../components', true, /\.stories\.js$/), module);

// automatically import all files ending in *.stories.js
// configure(require.context('../stories', true, /\.stories\.js$/), module);
