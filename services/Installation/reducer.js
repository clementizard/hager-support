export default (state, action) => {
	const {
		payload: {
			installId,
			data
		},
		type
	} = action;

	switch (type) {
		case 'updateStart': return { status: 'loading' };
		case 'updateSuccess': return { status: 'success', data: { ...state.data, [installId]: data } };
		case 'updateFail': return { status: 'error', data: state.data };
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};
