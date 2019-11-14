import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import GlobalStyles from '../styles/common/GlobalStyles';

if (process.env.NODE_ENV !== 'production') {
	const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
	whyDidYouRender(React);
}

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});
			
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}
	
	render () {
		return (
			<html>
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no, minimal-ui"
						key="viewport"
					/>
					<meta
						name="theme-color"
						content="white"
					/>
					{this.props.styleTags}
				</Head>
				<body>
					<GlobalStyles/>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
