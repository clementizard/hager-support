import React from 'react';

import { getLayout } from 'Layouts/LayoutFull';
import Dashboard from 'Components/Dashboard';

function Home() {
	return (<Dashboard />)
}
Home.getLayout = getLayout;

Home.whyDidYouRender = true;

export default Home
