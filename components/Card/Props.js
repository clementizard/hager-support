import PropTypes from 'prop-types';

export const propTypes = {
	/**
	 * Title of card
	 */
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	status: PropTypes.string.isRequired,
	offServices: PropTypes.array,
	onServices: PropTypes.array,
};
export const defaultProps = {
	description: '',
	offServices: [],
	onServices: [],
};
