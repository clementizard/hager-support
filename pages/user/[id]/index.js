import React from 'react';
import { useRouter } from 'next/router'

import { getLayout } from 'Layouts/LayoutUser';

const Index = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			The user {id}
		</>
	);
};
Index.getLayout = getLayout;

export default Index;

