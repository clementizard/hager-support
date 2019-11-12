import React from 'react';

import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

if (process.env.NODE_ENV !== 'production') {
	const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
	whyDidYouRender(React);
}

export default class MyDocument extends Document {
	static getInitialProps ({ renderPage }) {
		// Returns an object like: { html, head, errorHtml, chunks, styles }
		// Step 1: Create an instance of ServerStyleSheet
		const sheet = new ServerStyleSheet();
		
		// Step 2: Retrieve styles from components in the page
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
		
		// Step 3: Extract the styles as <style> tags
		const styleTags = sheet.getStyleElement();
		
		// Step 4: Pass styleTags as a prop
		return { ...page, styleTags };
		// return renderPage();
	}
	
	render () {
		return (
			<html>
				<Head>
					{/* Step 5: Output the styles in the head  */}
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
