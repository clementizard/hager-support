import PropTypes from 'prop-types';

export const propTypes = {
	/**
	 * Title of card
	 */
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	status: PropTypes.shape({
		string: PropTypes.string.isRequired,
		ok: PropTypes.bool.isRequired,
	}),
	offServices: PropTypes.array,
	onServices: PropTypes.array,
};
export const defaultProps = {
	description: '',
	offServices: [],
	onServices: [],
};
