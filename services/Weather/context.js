import { createContext, useContext } from 'react';

import defaultState from './default';
import weatherReducer from './reducer';

const WeatherStateContext = createContext();
const WeatherDispatchContext = createContext();

export const WeatherProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(weatherReducer, defaultState);
	
	return (
		<WeatherStateContext.Provider value={state}>
			<WeatherDispatchContext.Provider value={dispatch}>
				{children}
			</WeatherDispatchContext.Provider>
		</WeatherStateContext.Provider>
	)
};

export const useWeatherState = () => {
	const context = useContext(WeatherStateContext);
	if (context === undefined) throw new Error('useWeatherState must be used within a WeatherProvider');
	return context;
};
export const useWeatherDispatch = () => {
	const context = useContext(WeatherDispatchContext);
	if (context === undefined) throw new Error('useWeatherDispatch must be used within a WeatherProvider');
	return context;
};
