import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current price: {props.price} $</p>
      {controls.map(c => (
        <BuildControl
          key={c.label}
          label={c.label}
          type={c.type}
          addIngredient={props.addIngredient}
          removeIngredient={props.removeIngredient}
          disabled={!props.ingredients[c.type]}
        />
      ))}
      <button
        disabled={!props.anySelected}
        className={classes.OrderButton}
        onClick={props.onOrderConfirm}
      >order now
      </button>
    </div>
  );
};

export default buildControls;

buildControls.propTypes = {
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
  price: PropTypes.string.isRequired,
  anySelected: PropTypes.bool.isRequired,
  onOrderConfirm: PropTypes.func.isRequired,
};
