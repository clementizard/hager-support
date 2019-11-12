import React from 'react';

import LayoutFull from '../components/common/layouts/LayoutFull';

function Home() {
	return (
		<>
			the index page
		</>
	)
}
Home.getLayout = page => (
	<LayoutFull>{page}</LayoutFull>
);

Home.whyDidYouRender = true;

export default Home
