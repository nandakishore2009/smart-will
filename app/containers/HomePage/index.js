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
// import { FormattedMessage } from 'react-intl';
import { Parallax } from 'react-parallax';
import { Button, Icon } from 'react-materialize';
import NavLink from 'components/NavLink';
import WelcomeImg from './welcome.jpg';
import ProbateImg from './probate.jpg';
import Feature from './features';
// import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Parallax bgImage={WelcomeImg} strength={300}>
          <br /><br />
          <div className="container center">
            <h1 className="teal-text text-lighten-2">Smart Will</h1>
            <div className="row center">
              <h5 className="header col s12 light">A way to make your will with ease</h5>
            </div>
            <NavLink to="/register">
              <Button waves="light" large className="buttonGlobal z-depth-5 red darken-3">
               Let's Start Writting <Icon left>mode_edit</Icon>
              </Button>
            </NavLink>
          </div>
          <br /><br />
          <br /><br />
        </Parallax>

        <Feature />

        <Parallax bgImage={ProbateImg} strength={300}>
          <br /><br />
          <div className="container center">
            <h1 className="header teal-text text-lighten-2">Probate</h1>
            <div className="row center">
              <h5 className="header col s12 light">Take up your legacy</h5>
            </div>
            <br /><br />
            <br /><br />
          </div>
        </Parallax>
      </div>
    );
  }
}
