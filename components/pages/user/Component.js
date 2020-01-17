import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';

import { withTranslation } from 'Tools/i18n';
import { getLayout } from 'Layouts/LayoutUser';
import {
	useUserDispatch,
	useUserState,
	getUser,
} from 'Services/User';
import Container from './Styles';
import { propTypes, defaultProps } from './Props';

const Empty = ({ t }) => {
	const router = useRouter();
	const [userId, setUserId] = useState('');
	// const [userEmail, setUserEmail] = useState('');
	const [installId, setInstallId] = useState('');
	const dispatch = useUserDispatch();
	const { status, data } = useUserState();

	const loading = status.users[userId] === 'loading';
	const handleUUIDChange = ({ target: { value } }) => setUserId(value);
	const handleEmailChange = () => {
		// setUserEmail(value);
	};
	const handleInstallChange = ({ target: { value } }) => {
		// console.log('Change: ', value);
		setInstallId(value);
	};
	const handleUserClick = async () => {
		if (userId !== '') await getUser(dispatch, userId);
	};
	const handleInstallClick = async () => {
		// if (installId !== '') await getInstall(dispatch, installId);
	};
	useEffect(() => {
		if (data[userId] && Object.keys(data[userId]).length) router.push(`/user/${userId}`);
	}, [data, loading, router, userId]);

	return (
		<Container>
			<TextField
				label={t('usersearch:myHagerId')}
				inputProps={{ 'data-cy': 'input-id' }}
				margin="normal"
				variant="outlined"
				autoFocus
				fullWidth
				onChange={handleUUIDChange}
				disabled={loading}
			/>
			<TextField
				label={t('usersearch:email')}
				margin="normal"
				variant="outlined"
				fullWidth
				onChange={handleEmailChange}
				disabled={loading}
			/>
			<Button
				data-cy="submit-btn"
				variant="contained"
				fullWidth
				size="large"
				color="primary"
				onClick={handleUserClick}
				disabled={loading || (!userId)}
			>
				<Search />
				{t('usersearch:search')}
			</Button>
			{loading && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						margin: '24px',
					}}
				>
					<CircularProgress />
				</div>
			)}
			<Divider />
			<TextField
				label={t('usersearch:installId')}
				inputProps={{ 'data-cy': 'input-install' }}
				margin="normal"
				variant="outlined"
				fullWidth
				onChange={handleInstallChange}
				disabled={loading}
			/>
			<Button
				data-cy="submit-btn-install"
				variant="contained"
				fullWidth
				size="large"
				color="primary"
				onClick={handleInstallClick}
				disabled={loading || (!installId)}
			>
				<Search />
				{t('usersearch:search')}
			</Button>
		</Container>
	);
};
Empty.propTypes = propTypes;
Empty.defaultProps = defaultProps;
Empty.whyDidYouRender = true;
Empty.getLayout = getLayout;

export default withTranslation('usersearch')(Empty);
