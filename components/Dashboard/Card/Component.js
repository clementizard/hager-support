import React, { Fragment } from 'react';

import {
  Container,
  Title,
  Subtitle,
  Status,
  Service,
  Function,
} from './Styles';
import { propTypes, defaultProps } from './Props';

export const Card = ({
  title,
  description,
  status,
  offServices,
  onServices,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>
      <Status error={!status.ok}>{status.string}</Status>
      {offServices.map((service) => (
        <Fragment key={service.name}>
          <Service error>{service.name}</Service>
          {service.functions.map((serviceFunction) => (
            <Function key={serviceFunction}>{serviceFunction}</Function>
          ))}
        </Fragment>
      ))}
      {onServices.map((service, id) => (
        <Service key={`${service.name}${id}`}>{service.name}</Service>
      ))}
    </Container>
  );
};
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
Card.whyDidYouRender = true;

export default Card;

