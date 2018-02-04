import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import CheckoutSammary from '../../components/CheckoutSammary/CheckoutSammary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: {},
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query) {
      const [name, value] = param
      ingredients[name] = Number(value)
    }

    this.setState({ ingredients });
  }

  onContinuePurchasing = () => this.props.history.replace('checkout/contact-data')

  onDiscardPurchasing = () => this.props.history.goBack()
  render() {
    return (
      <div>
        <CheckoutSammary
          ingredients={this.state.ingredients}
          discardPurchasing={this.onDiscardPurchasing}
          continuePurchasing={this.onContinuePurchasing}
        />
        <Route path={`${this.props.match.path}/contact-data`} component={ContactData} />
      </div>
    );
  }
}

export default Checkout;

Checkout.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
