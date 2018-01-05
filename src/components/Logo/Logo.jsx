import React from 'react';
import classes from './Logo.css';
import PathToLogo from '../../assets/images/burger-logo.png';

const logo = props => (
  <div className={classes.Logo}>
    <img src={PathToLogo} alt="burger" />
  </div>
);

export default logo;
