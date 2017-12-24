import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const PRICE = {
  salad: 0.6,
  meat: 1.2,
  bacon: 0.9,
  cheese: 0.7,
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0,
    },
    totalPrice: '3.00',
  }

  addIngredient = (type) => {
    this.setState(prevState => ({
      ingredients: {
        ...prevState.ingredients,
        [type]: prevState.ingredients[type] + 1,
      },
      totalPrice: (+prevState.totalPrice + PRICE[type]).toFixed(2),
    }));
  }

  removeIngredient = (type) => {
    this.setState(prevState => ({
      ingredients: {
        ...prevState.ingredients,
        [type]: prevState.ingredients[type] ? prevState.ingredients[type] - 1 : 0,
      },
      totalPrice: prevState.ingredients[type] ? (+prevState.totalPrice - PRICE[type]).toFixed(2) : prevState.totalPrice,
    }));
  }

  render() {
    const disabledInfo = Object.keys(this.state.ingredients)
      .map(ingredient => ({ ingredient: !this.state.ingredients[ingredient] }));

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          disabledInfo={disabledInfo}
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}
