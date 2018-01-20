import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErroHandler = (WrapedComponent, axios) =>
  class extends Component {
    state = {
      error: null,
    }

    componentDidMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(res => res, (err) => {
        this.setState({ error: err.message });
        return err;
      });
    }

    closeErrorMessage = () => this.setState({ error: null })

    render() {
      return (
        <Aux>
          <Modal
            show={!!this.state.error}
            onCloseModal={this.closeErrorMessage}
          >
            { this.state.error }
          </Modal>
          <WrapedComponent {...this.props} />
        </Aux>
      );
    }
  };

export default withErroHandler;

