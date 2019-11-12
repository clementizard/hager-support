import React, { memo } from 'react';
import App from 'next/app';

import GlobalStyles from '../styles/common/GlobalStyles';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		
		const getLayout = Component.getLayout || (page => page);
		return (
			<>
				{getLayout(<Component {...pageProps} />)}
				<GlobalStyles/>
			</>
		);
	}
}
MyApp.whyDidYouRender = true;

export default memo(MyApp);
