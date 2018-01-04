import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    anySelected: false,
    purchasing: false,
  }

  addIngredient = (type) => {
    this.setState(prevState => ({
      ingredients: {
        ...prevState.ingredients,
        [type]: prevState.ingredients[type] + 1,
      },
      totalPrice: (+prevState.totalPrice + PRICE[type]).toFixed(2),
      anySelected: true,
    }));
  }

  removeIngredient = (type) => {
    this.setState((prevState) => {
      const ingredients = {
        ...prevState.ingredients,
        [type]: prevState.ingredients[type] ? prevState.ingredients[type] - 1 : 0,
      };
      const totalPrice = prevState.ingredients[type]
        ? (+prevState.totalPrice - PRICE[type]).toFixed(2)
        : prevState.totalPrice;
      const anySelected = Object.values(ingredients).some(amount => !!amount);

      return { ingredients, totalPrice, anySelected };
    });
  }

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  }

  abortPurchasing = () => {
    this.setState({ purchasing: false });
  }

  acceptPurchasing = () => {
    console.log('--- accepted ---')
  }

  render() {
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          onCloseModal={this.abortPurchasing}
        >
          <OrderSummary
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            clickedYes={this.acceptPurchasing}
            clickedNo={this.abortPurchasing}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          anySelected={this.state.anySelected}
          onOrderConfirm={this.purchasingHandler}
        />
      </Aux>
    );
  }
}
