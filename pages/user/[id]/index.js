import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import CircularProgress from '@material-ui/core/CircularProgress';

import Full from 'Components/User/Full';
import { getLayout } from 'Layouts/LayoutUser';
import { useUserState, useUserDispatch, getUser } from 'Services/User';

const Index = () => {
	const router = useRouter();
	const { id } = router.query;
	const dispatch = useUserDispatch();
	const { data, status: { users } } = useUserState();

	useEffect(() => {
		const fetchData = async () => {
			console.log('Getting user: ', id);
			await getUser(dispatch, id);
		};
		if (Boolean(id) && !data[id]) { // User Unknown, launch getUser Phase.
			fetchData();
		}
	}, [id]);
	
	console.log(users);

	return (
		<>
			{(!data[id] || users[id] === 'loading') && <CircularProgress />}
			{users[id] === 'error' && (
				<div>error: {data[id]}</div>
			)}
			{data[id] && <Full user={data[id]} />}
		</>
	);
};
Index.getLayout = getLayout;

export default Index;

