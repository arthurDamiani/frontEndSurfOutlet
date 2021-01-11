import React from 'react';
import PropTypes from 'prop-types';

const Thumb = ({src, alt}) => (
  <div className="shelf-item__thumb">
    <img src={src} alt={alt} />
  </div>
);

Thumb.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default Thumb;
