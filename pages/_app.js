import React from 'react';
import App from 'next/app';
import { appWithTranslation } from 'Tools/i18n';

import GlobalStyles from '../styles/common/GlobalStyles';

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
