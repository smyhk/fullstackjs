import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ message }) => {
  return (
    <h2 className=" Header text-center">
      {message}
    </h2>
  );
};

// prop validation
Header.propTypes = {
  message: PropTypes.string.isRequired  // only accepts a string and is mandatory
};

export default Header;