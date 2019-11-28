import React, { useMemo } from 'react';

import { getLayout } from 'Layouts/LayoutUser';
import Empty from 'Components/User/Empty';
import useWindowSize from "../../tools/hooks/windowSize";

const Index = () => {
	return (
		<Empty />
	);
};
Index.getLayout = getLayout;

export default Index;
