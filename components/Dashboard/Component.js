import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import useWeather from 'Services/Weather/hook';
import Card from './Card';
import { Container } from './Styles';
import { propTypes, defaultProps } from './Props';
import { PageTitle } from "./Card/Styles";

const Dashboard = () => {
  const { status, data } = useWeather();

  return [
    <PageTitle key="title">Météo des services</PageTitle>,
    <Container key="content">
      {status === 'success' && data.map((metric, id) => (
        <Card
          key={id}
          title={metric.title}
          description={metric.description}
          status={metric.status}
          onServices={metric.onServices}
          offServices={metric.offServices}
        />
      ))}
      {status === 'loading' && <CircularProgress />}
      {status === 'error' && <div>{data}</div>}
    </Container>,
  ];
};
Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
Dashboard.whyDidYouRender = true;

export default Dashboard;

