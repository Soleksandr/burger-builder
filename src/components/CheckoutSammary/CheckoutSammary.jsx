import React from 'react';
import PropTypes from 'prop-types';

import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckoutSammary.css';

const checkoutSammary = props => (
  <div className={classes.CheckoutSammary}>
    <h1>Here is your testy burger</h1>
    <Burger ingredients={props.ingredients} />
    <Button btnType="Danger" clicked={props.discardPurchasing}>cancel</Button>
    <Button btnType="Success" clicked={props.continuePurchasing}>ok</Button>
  </div>
);

checkoutSammary.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default checkoutSammary;
