import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const PRICE = {
  salad: 0.6,
  meat: 1.2,
  bacon: 0.9,
  cheese: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: '3.00',
    anySelected: false,
    purchasing: false,
    loading: false,
  }

  componentDidMount() {
    axios.get('https://burger-builder-d905f.firebaseio.com/ingredients.json')
      .then(res => this.setState({ ingredients: res.data }));
  }

  getOrderDetails = () => ({
    ingredients: this.state.ingredients,
    price: this.state.totalPrice,
    user: {
      name: 'Test',
      surname: 'Test',
      email: 'test@test.com',
    },
  })

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
    const query = Object.entries(this.state.ingredients)
      .map(arr => `${encodeURIComponent(arr[0])}=${encodeURIComponent(arr[1])}`);
    console.log('query = ', query)
    this.props.history.push({
      pathname: '/checkout',
      search: `${query.join('&')}`,
    });
    // this.setState({ loading: true });
    // const order = this.getOrderDetails();
    // axios.post('/orders.json', order)
    //   .then((res) => {
    //     this.setState({
    //       purchasing: false,
    //       loading: false,
    //     });
    //     console.log('response : ', res);
    //   })
    //   .catch((err) => {
    //     this.setState({
    //       purchasing: false,
    //       loading: false,
    //     });
    //     console.log('error : ', err);
    //   });
  }

  render() {
    let orderSummary = null;
    let burger = <Spinner />;
    if (this.state.ingredients) {
      burger = (
        <Aux>
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
      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          clickedYes={this.acceptPurchasing}
          clickedNo={this.abortPurchasing}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          onCloseModal={this.abortPurchasing}
        >
          { orderSummary }
        </Modal>
        { burger }
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);

BurgerBuilder.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

