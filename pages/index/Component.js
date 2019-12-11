import React, { memo } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { withTranslation } from 'Tools/i18n';
import { getLayout } from 'Layouts/LayoutFull';
import useWeather from 'Services/Weather/hook';
import Card from 'Components/Dashboard/Card';
import { PageTitle } from 'Components/Dashboard/Card/Styles';
import { Container } from './Styles';
import { propTypes, defaultProps } from './Props';

const Dashboard = ({ t }) => {
  const { status, data } = useWeather();

  return [
    <PageTitle key="title">{t('dashboard:title')}</PageTitle>,
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
Dashboard.getInitialProps = async() => ({ namespacesRequired: ['dashboard'] });
Dashboard.getLayout = getLayout;

export default withTranslation('dashboard')(Dashboard);

