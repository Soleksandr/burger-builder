import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavigationItem.css';

const navigationItem = props => (
  <li className={classes.NavigationItem}>
    <a
      className={props.active ? classes.active : null}
      href={props.link}
    >
      {props.children}
    </a>
  </li>
);

navigationItem.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

navigationItem.defaultProps = {
  active: false,
};
export default navigationItem;

