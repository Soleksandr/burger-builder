import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

export default class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          onBackdropClick={this.props.onCloseModal}
        />
        <div className={`${classes.Modal} ${this.props.show ? classes.Show : classes.Hide}`}>
          {this.props.children}
        </div>
      </Aux>);
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  show: PropTypes.bool,
  onCloseModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  children: null,
  show: null,
};
