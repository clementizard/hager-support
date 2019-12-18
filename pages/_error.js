import Error from 'next/error';
import Router from 'next/router';

export default Error;

Error.getInitialProps = ({ res, err, asPath }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	
	if (statusCode && statusCode === 404) {
		const lastCase = asPath.length - 1;
		if (asPath[lastCase] === '/') {
			const withoutTrailingSlash = asPath.substr(0, lastCase);
			if (res) {
				res.writeHead(302, {
					Location: withoutTrailingSlash
				});
				res.end();
			} else {
				Router.push(withoutTrailingSlash);
			}
		}
	}
	
	return { statusCode };
};
