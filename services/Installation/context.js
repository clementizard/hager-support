import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import defaultState from './default';
import installationReducer from './reducer';

const InstallationStateContext = createContext();
const InstallationDispatchContext = createContext();

export const InstallationProvider = ({ children }) => {
	const [state, dispatch] = useReducer(installationReducer, defaultState);

	return (
		<InstallationStateContext.Provider value={state}>
			<InstallationDispatchContext.Provider value={dispatch}>
				{children}
			</InstallationDispatchContext.Provider>
		</InstallationStateContext.Provider>
	);
};
InstallationProvider.propTypes = { children: PropTypes.any.isRequired };

export const useInstallationState = () => {
	const context = useContext(InstallationStateContext);
	if (context === undefined) throw new Error('useInstallationState must be used within a InstallationProvider');
	return context;
};
export const useInstallationDispatch = () => {
	const context = useContext(InstallationDispatchContext);
	if (context === undefined) throw new Error('useInstallationDispatch must be used within a InstallationProvider');
	return context;
};
