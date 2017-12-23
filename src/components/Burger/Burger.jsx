import React from 'react';
import PropTypes from 'prop-types';
import BurgerIngredient from './BurgerIngridient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(name => [...Array(props.ingredients[name])]
      .map((_, i) => (
        <BurgerIngredient
          key={name + i}
          type={name}
        />)));

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

burger.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
};
