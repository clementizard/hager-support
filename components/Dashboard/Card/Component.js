import React, { Fragment, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Arrow from '@material-ui/icons/KeyboardArrowDown';

import {
  Container,
  Title,
  Status,
  Service,
  Function,
  ExtendBtn,
} from './Styles';
import { propTypes, defaultProps } from './Props';

export const Card = ({
  title,
  status,
  offServices,
  onServices,
  noSmall,
}) => {
  const hasServices = Boolean(offServices.length || onServices.length);
  const [extended, setExtended] = useState(hasServices);
  const handleExtend = () => setExtended(!extended);

  return (
    <Container>
      {(hasServices && !noSmall) &&
        <ExtendBtn rotate={extended}>
          <IconButton onClick={handleExtend}>
            <Arrow />
          </IconButton>
        </ExtendBtn>
      }
      <Title margin={extended}><Status value={status} />{title}</Title>
      {(hasServices && extended) && (
        <>
          {offServices.map((service) => (
            <Fragment key={service.name}>
              <Service><Status value={service.status} small />{service.name}</Service>
              {service.functions.map((serviceFunction) => (
                <Function key={serviceFunction}>{serviceFunction}</Function>
              ))}
            </Fragment>
          ))}
          {onServices.map((service, id) => (
            <Service key={`${service.name}${id}`}><Status value={service.status} small />{service.name}</Service>
          ))}
        </>
      )}
    </Container>
  );
};
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
Card.whyDidYouRender = true;

export default Card;

