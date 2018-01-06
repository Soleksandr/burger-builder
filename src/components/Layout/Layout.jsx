import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }
  onCloseSideDrawer = () => this.setState({ showSideDrawer: false })

  onOpenSideDrawer = () => this.setState({ showSideDrawer: true })

  onToggleSideDrawer = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  }

  render() {
    return (
      <Aux>
        <Toolbar toggleSideDrawerHandler={this.onToggleSideDrawer} />
        <SideDrawer closed={this.onCloseSideDrawer} show={this.state.showSideDrawer} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

