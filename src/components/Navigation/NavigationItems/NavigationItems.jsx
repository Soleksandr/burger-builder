import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <nav className={classes.NavigationItems}>
    <ul>
      <NavigationItem link="/" active>BurgerBuilder</NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  </nav>
);

export default navigationItems;
