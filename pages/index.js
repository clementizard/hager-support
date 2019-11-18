import React from 'react';

import { getLayout } from '../components/common/layouts/LayoutFull';
import Dashboard from '../components/Dashboard';

function Home() {
	return (<Dashboard />)
}
Home.getLayout = getLayout;

Home.whyDidYouRender = true;

export default Home
