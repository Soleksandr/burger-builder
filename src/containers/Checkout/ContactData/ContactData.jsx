import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    adress: {
      city: '',
      street: '',
    },
  }
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter contact data please!</h4>
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="Name" />
          <input className={classes.Input} type="text" name="email" placeholder="Email" />
          <input className={classes.Input} type="text" name="city" placeholder="City" />
          <input className={classes.Input} type="text" name="street" placeholder="Street" />
          <Button btnType="Success" clicked={() => {}}>order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;