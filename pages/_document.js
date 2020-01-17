import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const sheets = new ServerStyleSheets();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () => originalRenderPage({
				enhanceApp: App => props => sheets.collect(sheet.collectStyles(<App {...props} />)),
			});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
						{sheets.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<html lang="fr">
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
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
