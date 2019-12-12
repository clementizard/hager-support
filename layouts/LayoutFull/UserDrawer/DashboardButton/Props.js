import PropTypes from 'prop-types';

export const propTypes = {
	title: PropTypes.any.isRequired,
	Icon: PropTypes.object.isRequired,
	bottom: PropTypes.bool,
	onClick: PropTypes.func,
	tooltipProps: PropTypes.object,
};
export const defaultProps = {
	bottom: false,
	onClick: () => null,
	tooltipProps: {},
};
