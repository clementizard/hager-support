import React, { useState, memo } from 'react';

import {
	Container,
	Inner,
} from './Styles';
import { propTypes, defaultProps } from './Props';

import LayoutFull from '../LayoutFull';
import AppBar from './AppBar';

const LayoutUser = ({ children }) => {
	const [detailsOpen, setDetailsOpen] = useState(-1);
	const handleDetailsOpen = detailsId => () => {
		if (detailsOpen === detailsId) setDetailsOpen(-1);
		else setDetailsOpen(detailsId);
	};

	return (
		<Container detailsOpen={detailsOpen !== -1}>
			<AppBar
				detailsOpen={detailsOpen}
				onOpenDetails={handleDetailsOpen}
			/>
			<Inner>
				{children}
			</Inner>
		</Container>
	);
};
LayoutUser.getLayout = page => (<LayoutFull>{page}</LayoutFull>);
LayoutUser.propTypes = propTypes;
LayoutUser.defaultProps = defaultProps;
LayoutUser.whyDidYouRender = true;

export default memo(LayoutUser);
