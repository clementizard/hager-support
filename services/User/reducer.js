export default (state, {
	type,
	payload: {
		installId,
		userId,
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
			console.log('userDelete', userId);
			newState = Object.assign({}, state);
			const successDelete = delete newState.data[userId];
			console.log('NewState: ', newState);
			if (successDelete) {
				if (typeof window !== 'undefined') localStorage.setItem('User', JSON.stringify(newState));
				return newState;
			} else {
				console.error(`Cannot remove user ${userId} : the property is an own non-configurable property`);
				return state;
			}
		default: {
			throw new Error(`Unhandled action type: ${type}`);
		}
	}
};
