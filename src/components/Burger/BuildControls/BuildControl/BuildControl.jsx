import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControl.css';

class BuildControl extends Component {
  addIngredient = () => {
    this.props.addIngredient(this.props.type);
  }

  removeIngredient = () => {
    this.props.removeIngredient(this.props.type);
  }

  render() {
    return (
      <div className={classes.BuildControl}>
        <div className={classes.Label}>{this.props.label}</div>
        <button disabled={this.props.disabled} onClick={this.removeIngredient} className={classes.Less}>Less</button>
        <button onClick={this.addIngredient} className={classes.More}>More</button>
      </div>
    );
  }
}

export default BuildControl;

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
