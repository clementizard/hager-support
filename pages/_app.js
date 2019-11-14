import React from 'react';
import App from 'next/app';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		
		const getLayout = Component.getLayout || (page => page);
		return getLayout(<Component {...pageProps} />);
	}
}

export default MyApp;
