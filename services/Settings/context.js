import { createContext, useContext } from 'react';

import defaultState from './default';
import settingsReducer from './reducer';

const SettingsStateContext = createContext();
const SettingsDispatchContext = createContext();

export const SettingsProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(settingsReducer, defaultState);

	return (
		<SettingsStateContext.Provider value={state}>
			<SettingsDispatchContext.Provider value={dispatch}>
				{children}
			</SettingsDispatchContext.Provider>
		</SettingsStateContext.Provider>
	)
};

export const useSettingsState = () => {
	const context = useContext(SettingsStateContext);
	if (context === undefined) throw new Error('useSettingsState must be used within a SettingsProvider');
	return context;
};
export const useSettingsDispatch = () => {
	const context = useContext(SettingsDispatchContext);
	if (context === undefined) throw new Error('useSettingsDispatch must be used within a SettingsProvider');
	return context;
};
