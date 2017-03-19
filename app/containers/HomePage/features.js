import React from 'react';
import { Row, Col, Icon } from 'react-materialize';
import styled from 'styled-components';

const Prag = styled.p`
   line-height: 2rem; 
   font-weight: 300;
`;

function Feature() {
  return (
    <Row className="center container">
      <Col s={12} m={4} className="icon-block">
        <h2 className="brown-text"><Icon>flash_on</Icon></h2>
        <h5>Speeds up deployment</h5>
        <Prag>We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</Prag>
      </Col>
      <Col s={12} m={4} className="icon-block" >
        <h2 className="center brown-text"><Icon>group</Icon></h2>
        <h5>User Experience Focused</h5>
        <Prag>By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</Prag>
      </Col>
      <Col s={12} m={4} className="icon-block">
        <h2 className="center brown-text"><Icon>settings</Icon></h2>
        <h5>Easy to work with</h5>
        <Prag>We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</Prag>
      </Col>
    </Row>
  );
}

export default Feature;
