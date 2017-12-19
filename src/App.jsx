import React, { Component } from 'react';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <div>Children props for Layout</div>
      </Layout>
    );
  }
}

export default App;
