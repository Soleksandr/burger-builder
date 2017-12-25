import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients)
    .map(ingredient => (
      <li key={ingredient}>
        <span>{ingredient} :</span>
        <span>{props.ingredients[ingredient]}</span>
      </li>));

  return (
    <Aux>
      <h3>You have ordered delicious burger with ingredients:</h3>
      <ul>
        {ingredients}
      </ul>
    </Aux>
  );
};

export default orderSummary;

orderSummary.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
};
