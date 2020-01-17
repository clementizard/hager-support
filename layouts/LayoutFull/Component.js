import React, { memo } from 'react';

import { WeatherProvider } from 'Services/Weather';
import { UserProvider } from 'Services/User';
import { InstallationProvider } from 'Services/Installation';
import { SettingsProvider } from 'Services/Settings';
import UserDrawer from './UserDrawer';
import {
	Container,
	Inner,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const LayoutFull = ({ children }) => (
	<WeatherProvider>
		<UserProvider>
			<InstallationProvider>
				<SettingsProvider>
					<Container>
						<UserDrawer />
						<Inner>
							{children}
						</Inner>
					</Container>
				</SettingsProvider>
			</InstallationProvider>
		</UserProvider>
	</WeatherProvider>
);
LayoutFull.propTypes = propTypes;
LayoutFull.defaultProps = defaultProps;
LayoutFull.whyDidYouRender = true;

export default memo(LayoutFull);
