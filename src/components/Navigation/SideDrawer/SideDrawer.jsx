import React from 'react';
import PropTypes from 'prop-types';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux';
import BackDrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  const style = `${classes.SideDrawer} ${props.show ? classes.Open : classes.Close}`;
  return (
    <Aux>
      <BackDrop onBackdropClick={props.closed} show={props.show} />
      <div className={style}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </Aux>
  );
};

export default sideDrawer;

sideDrawer.propTypes = {
  closed: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

sideDrawer.defaultProps = {
  show: false,
};

