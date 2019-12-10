import React from 'react';
import App from 'next/app';
import { appWithTranslation } from 'Tools/i18n';

import GlobalStyles from '../styles/common/GlobalStyles';

if (process.env.NODE_ENV !== 'production') {
	const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
	whyDidYouRender(React);
}

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		
		const getLayout = Component.getLayout || (page => page);
		return getLayout(
			<>
				<GlobalStyles />
				<Component {...pageProps} />
			</>
		);
	}
}

export default appWithTranslation(MyApp);
