import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => (
  <Aux>
    <Backdrop
      show={props.show}
      onBackdropClick={props.onCloseModal}
    />
    <div className={`${classes.Modal} ${props.show ? classes.Show : classes.Hide}`}>
      {props.children}
    </div>
  </Aux>
);

export default modal;

modal.propTypes = {
  children: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
