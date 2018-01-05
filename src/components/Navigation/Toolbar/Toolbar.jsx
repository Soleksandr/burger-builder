import React from 'react';
import PropTypes from 'prop-types';
import classes from './Toolbar.css';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <div>Logo</div>
    <nav>.......</nav>
  </header>
);

export default toolbar;