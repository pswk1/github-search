import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <i className={icon} />
        <span style={{ paddingLeft: '.5em' }}>{title}</span>
      </h1>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </ul>
    </nav>
  );
};

// default props to exist
// However, if props are actually passed in, the default props will be overwritten
Navbar.defaultProps = {
  title: `What's Your Github?`,
  icon: 'fab fa-github',
};

// Checks the type of the prop. In this case, whatever prop that is passed in must be a string.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
