import React, { memo } from 'react';

import Card from 'Components/Card';
import Button from 'Components/Button';
import useWeather from 'Services/Weather/hook';
import {
	Container,
	DetailsContainer,
	DetailsInner,
	Bar,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const AppBar = ({
	detailsOpen,
	onOpenDetails,
}) => {
	const { status, data } = useWeather();

	return (
		<Container open={detailsOpen !== -1}>
			<Bar>
				{status === 'success' && data.map((metric, id) => (
					<Button
						key={metric.title}
						data-cy={`service-btn-${metric.title.replace(/\s+/g, '')}`}
						label={metric.title}
						colors={{
							background: metric.status === 'ko' ? 'var(--status-error-foreground)' : (metric.status === 'warn' ? 'var(--status-warning-foreground)' : 'var(--status-success-foreground)'),
							label: metric.status === 'ko' ? 'var(--status-error-background)' : (metric.status === 'warn' ? 'var(--status-warning-background)' : 'var(--status-success-background)'),
						}}
						font={{ weight: 600 }}
						containerStyle={{ margin: '0 8px' }}
						onClick={onOpenDetails(id)}
					/>
				))}
			</Bar>
			<DetailsContainer>
				{status === 'success' && data.map((metric, id) => (
					<DetailsInner
						open={detailsOpen === id}
						key={metric.title}
						data-cy={`details-${metric.title.replace(/\s+/g, '')}`}
					>
						<Card
							onServices={metric.onServices}
							offServices={metric.offServices}
							title={metric.title}
							status={metric.status}
							noSmall
						/>
					</DetailsInner>
				))}
			</DetailsContainer>
		</Container>
	);
};
AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;
AppBar.whyDidYouRender = true;

export default memo(AppBar);
