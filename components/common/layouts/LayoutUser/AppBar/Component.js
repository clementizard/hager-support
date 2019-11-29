import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';

import Button from 'Components/common/Button';
import useWeather from 'Services/Weather/hook';
import {
  Container,
  DetailsContainer,
  DetailsInner,
  Bar,
} from './Styles';
import { propTypes, defaultProps } from './Props';
import Card from 'Components/Dashboard/Card';

const AppBar = ({
  drawerOpen,
  drawerDisabled,
  onOpenDrawer,
  detailsOpen,
  onOpenDetails,
}) => {
  const { status, data } = useWeather();
  
  return (
    <Container open={detailsOpen !== -1}>
      <Bar>
        {(!drawerOpen && !drawerDisabled) &&
          <div style={{ position: 'absolute', left: 16 }}>
            <IconButton onClick={onOpenDrawer}>
              <Menu />
            </IconButton>
          </div>
        }
        {status === 'success' && data.map((metric, id) => (
          <Button
            key={metric.title}
            label={metric.title}
            colors={{
              background: metric.status === 'ko' ? 'var(--status-error-foreground)' : (metric.status === 'warn' ? 'var(--status-warning-foreground)' : 'var(--status-success-foreground)'),
              label: metric.status === 'ko' ? 'var(--status-error-background)' : (metric.status === 'warn' ? 'var(--status-warning-background)' : 'var(--status-success-background)'),
            }}
            font={{ weight: 600 }}
            containerStyle={{ margin: '0 8px' }}
            onClick={onOpenDetails(id)}
          />
        ))}
      </Bar>
      <DetailsContainer>
        {status === 'success' && data.map((metric, id) => (
          <DetailsInner open={detailsOpen === id}>
            <Card
              onServices={metric.onServices}
              offServices={metric.offServices}
              title={metric.title}
              status={metric.status}
              noSmall
            />
          </DetailsInner>
        ))}
      </DetailsContainer>
    </Container>
  );
};
AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;
AppBar.whyDidYouRender = true;

export default AppBar;

