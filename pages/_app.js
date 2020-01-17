import React from 'react';
import App from 'next/app';
import { appWithTranslation } from 'Tools/i18n';
import { PageTransition } from 'next-page-transitions';

import GlobalStyles from '../styles/common/GlobalStyles';

if (process.env.NODE_ENV !== 'production') {
	const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
	whyDidYouRender(React);
}

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		const getLayout = Component.getLayout || (page => page);
		return getLayout(
			<>
				<GlobalStyles />
				<PageTransition timeout={300} classNames="page-transition">
					<Component {...pageProps} />
				</PageTransition>
			</>,
		);
	}
}

export default appWithTranslation(MyApp);
