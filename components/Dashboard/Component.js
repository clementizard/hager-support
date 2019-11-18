import React, { useEffect } from 'react';

import {useWeatherState, updateWeather, useWeatherDispatch} from '../../contexts/Weather/index';
import Card from './Card';
import { Container } from './Styles';
import { propTypes, defaultProps } from './Props';

const Dashboard = () => {
  const { status, data } = useWeatherState();
  const dispatch = useWeatherDispatch();
  
  useEffect(() => {
    if (!data.length) updateWeather(dispatch);
  }, []);

  return (
    <Container>
      {status === 'success' && data.map((metric, id) => (
        <Card
          key={id}
          title={metric.title}
          description={metric.description}
          status={{
            string: `${metric.status.valid}/${metric.status.total}`,
            ok: metric.status.ok,
          }}
          onServices={metric.onServices}
          offServices={metric.offServices}
        />
      ))}
      {status === 'loading' && <div>LOADING...</div>}
      {status === 'error' && <div>{data}</div>}
    </Container>
  );
};
Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
Dashboard.whyDidYouRender = true;

export default Dashboard;

