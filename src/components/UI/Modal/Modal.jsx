import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.css';

const modal = props => (
  <div className={`${classes.Modal} ${props.show ? classes.Show : classes.Hide}`}>
    {props.children}
  </div>
);

export default modal;

modal.propTypes = {
  children: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired,
};
