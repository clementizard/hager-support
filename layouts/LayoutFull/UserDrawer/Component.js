import React, { useState, memo, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Dashboard from '@material-ui/icons/Dashboard';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Settings from '@material-ui/icons/Settings';

import { withTranslation } from 'Tools/i18n';
import UserButtonList from './UserButtonList';
import DashboardButton from './DashboardButton';
import SettingsDialog from './SettingsDialog';
import { Container } from './Styles';
import { propTypes, defaultProps } from './Props';

const UserDrawer = ({ t }) => {
	const [settingsOpen, setSettingsOpen] = useState(false);
	const handleSettingsOpen = () => setSettingsOpen(!settingsOpen);

	const router = useRouter();
	const activeRoute = router.pathname === '/user/[id]' ? router.query && router.query.id : router.pathname;

	return useMemo(() => ([
		<Container key="container">
			<Link href="/">
				<DashboardButton
					title={t('userdrawer:dashboardBtn')}
					Icon={Dashboard}
					active={activeRoute === '/'}
				/>
			</Link>
			<Link href="/user">
				<DashboardButton
					data-cy="add-user-btn"
					title={t('userdrawer:userBtn')}
					Icon={PersonAdd}
					active={activeRoute === '/user'}
				/>
			</Link>
			<UserButtonList activeUser={activeRoute} />
			<DashboardButton
				data-cy="settings-btn"
				title={t('userdrawer:optionsBtn')}
				Icon={Settings}
				bottom
				onClick={handleSettingsOpen}
			/>
		</Container>,
		<SettingsDialog
			key="dialog"
			open={settingsOpen}
			onClose={handleSettingsOpen}
		/>,
	]), [t, activeRoute, handleSettingsOpen, settingsOpen]);
};
UserDrawer.propTypes = propTypes;
UserDrawer.defaultProps = defaultProps;
UserDrawer.whyDidYouRender = true;

export default withTranslation('userdrawer')(memo(UserDrawer));
