import React from 'react';
import Container from './paper.styles';

const Paper = props => (
  <Container className={props.className}>
    {props.children}
  </Container>
);

export default Paper;
