import React from 'react';

import { getLayout } from 'Layouts/LayoutUser';
import Empty from 'Components/User/Empty';

const Index = () => {
	return (
		<Empty />
	);
};
Index.getLayout = getLayout;

export default Index;
