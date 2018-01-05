import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => (
  <Aux>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;

layout.propTypes = {
  children: PropTypes.element.isRequired,
};

