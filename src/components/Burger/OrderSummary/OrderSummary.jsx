import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
      <h3>Total sum: {props.price} $</h3>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.clickedNo}>NO</Button>
      <Button btnType="Success" clicked={props.clickedYes}>YES</Button>
    </Aux>
  );
};

export default orderSummary;

orderSummary.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
  clickedNo: PropTypes.func.isRequired,
  clickedYes: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
};
