/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import withProgressBar from 'components/ProgressBar';
import Header from 'components/Header';
import Footer from 'components/Footer';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s - Smart Will"
          defaultTitle="Smart Will"
          meta={[
            { name: 'description', content: 'Make your will' },
          ]}
        />
        <Header />
        {React.Children.toArray(this.props.children)}
        <Footer />
      </div>
    );
  }
}

export default withProgressBar(App);
