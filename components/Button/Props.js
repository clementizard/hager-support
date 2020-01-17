import PropTypes from 'prop-types';

export const propTypes = {
	colors: PropTypes.shape({
		background: PropTypes.string,
		label: PropTypes.string,
	}),
	font: PropTypes.shape({
		weight: PropTypes.number,
	}),
	containerStyle: PropTypes.object,
	label: PropTypes.string.isRequired,
};
export const defaultProps = {
	colors: {
		background: 'var(--status-info-foreground)',
		label: 'var(--status-info-background)',
	},
	font: {
		weight: 500,
	},
	containerStyle: {},
};
