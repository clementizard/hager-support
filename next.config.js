require('dotenv').config();

const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withFonts = require('next-fonts');

const nextConfig = {
	target: 'serverless',
	analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
	analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
	bundleAnalyzerConfig: {
		server: {
			analyzerMode: 'static',
			reportFilename: '../bundles/server.html',
		},
		browser: {
			analyzerMode: 'static',
			reportFilename: '../bundles/client.html',
		},
	},
	enableSvg: true,
	webpack(config) {
		return config;
	},
};

module.exports = withBundleAnalyzer(withFonts(nextConfig));
