export default (state, {
	type,
	payload: {
		userId,
		installId,
		deviceId,
		item,
		value,
		error,
		data,
	}
}) => {
	let newState;
	
	switch (type) {
		case 'deviceUpdateStart':
			return {
				...state,
				status: {
					...state.status,
					installations: {
						[`${userId}/${installId}`]: 'loading',
					},
				},
			};
		case 'deviceUpdateFail':
			return {
				...state,
				status: {
					...state.status,
					installations: {
						[`${userId}/${installId}`]: 'error',
					},
				},
				data: {
					...state.data,
					[userId]: {
						...state.data[userId],
						installations: {
							...state.data[userId].installations,
							[installId]: {
								...state.data[userId].installations[installId],
								devices: error,
							}
						}
					}
				}
			};
		case 'deviceUpdateSuccess':
			return {
				...state,
				status: {
					...state.status,
					installations: {
						[`${userId}/${installId}`]: 'success',
					},
				},
				data: {
					...state.data,
					[userId]: {
						...state.data[userId],
						installations: {
							...state.data[userId].installations,
							[installId]: {
								...state.data[userId].installations[installId],
								devices: data,
							}
						}
					}
				}
			};
		case 'userUpdateStart':
			return {
				...state,
				status: {
					...state.status,
					users: {
						...state.status.users,
						[userId]: 'loading',
					},
				},
			};
		case 'userUpdateSuccess':
			newState = {
				...state,
				status: {
					...state.status,
					users: {
						...state.status.user,
						[userId]: 'success',
					},
				},
				data: {
					...state.data,
					[userId]: data,
				},
			};
			
			if (typeof window !== 'undefined') localStorage.setItem('User', JSON.stringify(newState));
			return newState;
		case 'userUpdateFail':
			return {
				...state,
				status: {
					...state.status,
					users: {
						...state.status.user,
						[userId]: 'error',
					},
				},
				data: {
					...state.data,
					[userId]: error,
				},
			};
		case 'userDelete':
			newState = Object.assign({}, state);
			const successDelete = delete newState.data[userId];
			if (successDelete) {
				if (typeof window !== 'undefined') localStorage.setItem('User', JSON.stringify(newState));
				return newState;
			} else return state;
		case 'userSelect':
			return {
				...state,
				selected: {
					...state.selected,
					[userId]: {
						...state.selected[userId],
						[item]: value,
					},
				},
			};
		case 'userDeselectInstall':
			return {
				...state,
				selected: {
					...state.selected,
					[userId]: {
						...state.selected[userId],
						install: null,
						device: null,
					},
				},
			};
		case 'updateSearch':
			return {
				...state,
				selected: {
					...state.selected,
					[userId]: {
						...state.selected[userId],
						search: value,
					},
				},
			};
		default: {
			throw new Error(`Unhandled action type: ${type}`);
		}
	}
};
