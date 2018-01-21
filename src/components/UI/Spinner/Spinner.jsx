import React from 'react';
import PropTypes from 'prop-types';
import classes from './Spinner.css';

const spinner = () => (
  <div className={classes['sk-cube-grid']}>
    <div className={`${classes['sk-cube']} ${classes['sk-cube1']}`} />
    <div className={`${classes['sk-cube']} ${classes['sk-cube2']}`} />
    <div className={`${classes['sk-cube']} ${classes['sk-cube3']}`} />
    <div className={`${classes['sk-cube']} ${classes['sk-cube4']}`} />
    <div className={`${classes['sk-cube']} ${classes['sk-cube5']}`} />
    <div className={`${classes['sk-cube']} ${classes['sk-cube6']}`} />
    <div className={`${classes['sk-cube']} ${classes['sk-cube7']}`} />
    <div className={`${classes['sk-cube']} ${classes['sk-cube8']}`} />
    <div className={`${classes['sk-cube']} ${classes['sk-cube9']}`} />
  </div>
);

export default spinner;
