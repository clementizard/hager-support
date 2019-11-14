import React from 'react';

import LayoutFull from '../components/common/layouts/LayoutFull';
import Dashboard from '../components/Dashboard';

function Home() {
	return (<Dashboard />)
}
Home.getLayout = page => (
	<LayoutFull>{page}</LayoutFull>
);
Home.Layout = LayoutFull;

Home.whyDidYouRender = true;

export default Home
