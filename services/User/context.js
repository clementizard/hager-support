import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import defaultState from './default';
import userReducer from './reducer';

const UserStateContext = createContext();
const UserDispatchContext = createContext();

export const UserProvider = ({ children }) => {
	const oldStateUnparsed = typeof window !== 'undefined' ? localStorage.getItem('User') : null;
	const oldState = oldStateUnparsed ? JSON.parse(oldStateUnparsed) : null;
	const [state, dispatch] = useReducer(userReducer, oldState || defaultState);

	return (
		<UserStateContext.Provider value={state}>
			<UserDispatchContext.Provider value={dispatch}>
				{children}
			</UserDispatchContext.Provider>
		</UserStateContext.Provider>
	);
};
UserProvider.propTypes = { children: PropTypes.any.isRequired };

export const useUserState = () => {
	const context = useContext(UserStateContext);
	if (context === undefined) throw new Error('useUserState must be used within a UserProvider');
	return context;
};
export const useUserDispatch = () => {
	const context = useContext(UserDispatchContext);
	if (context === undefined) throw new Error('useUserDispatch must be used within a UserProvider');
	return context;
};
