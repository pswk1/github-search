import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  // default props to exist
  // However, if props are actually passed in, the default props will be overwritten
  static defaultProps = {
    title: 'Find a Github!',
    icon: 'fab fa-github',
  };

  // Checks the type of the prop. In this case, whatever prop that is passed in must be a string.
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-dark'>
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
