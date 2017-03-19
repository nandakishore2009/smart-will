/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import { Button, Card, Col, Row, Input, Icon } from 'react-materialize';
import NavLink from 'components/NavLink';
import Background from '../background.jpg';
// import { push } from 'react-router-redux';

const sectionStyle = {
  width: '100%',
  backgroundImage: `url(${Background})`,
  overflow: 'hidden',
};

function ButtonRegistrationSub() {
  function processClick() {
   // dispatch(push('/register'));
  }

  return (
    <NavLink to="/create">
      <Button waves="light" type="submit" large className="red lighten-1 centerAling" onClick={processClick()}>
              Submit
             <Icon left>done_all</Icon>
      </Button>
    </NavLink>
  );
}


export default class Registration extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div style={sectionStyle}>
        <Helmet
          titleTemplate="%s - Smart Will"
          defaultTitle="Smart Will"
          meta={[
            { name: 'description', content: 'Make your will' },
          ]}
        />

        <Card
          className="container centerAling z-depth-5" textClassName="black-text " title={<h3>Registration</h3>}
          actions={[<ButtonRegistrationSub />]}
        >
          <Row>
            <Input s={12} m={6} label="First Name" type="text" validate />
            <Input s={12} m={6} label="Last Name" type="text" validate />
            <Input s={12} m={6} label="Date Of Birth" type="date" defaultValue="dd/mm/yyyy" />
            <Input s={12} type="email" label="Email" validate />
            <Input s={12} label="Mobile Number" type="tel" validate />
            <Col s={12} m={9} l={6}>
              <label><h6>Gender</h6></label>
              <div className="radioHeaderSpace ">
                <Input s={6} name="Gender" type="radio" className="  radioBugFix" label="Male" />
                <Input s={6} name="Gender" type="radio" className="  radioBugFix" label="Female" />
              </div>
            </Col>
            <Input s={12} label="Address" type="text" validate />
            <Input s={12} m={6} label="State" type="text" validate />
            <Input s={12} m={6} label="City" type="text" validate />
            <Input s={12} label="Pin Code" type="number" validate />
            <Input s={12} label="Adhar Number" type="number" validate />
            <Input s={12} m={6} label="Username" type="text" valsidate />
            <Input s={12} m={6} type="password" label="password" validate />
          </Row>
        </Card>
      </div>
    );
  }
}
