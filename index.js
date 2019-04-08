import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Redirect } from '@reach/router';

import Home from './components/home';
import Header from './components/sidebar';
import About from './components/about';
import FAQ from './components/faq';

export default class App extends Component {
  render() {
    return (
      <main
        style={{
          width: '100vw',
          height: '100vh'
        }}>
        {(document.body.style = 'background: #494949;')}
        <Header />
        <Router>
          <Redirect from="Home" to="/" />
          <Home path="/" />
          <About path="/About" />
          <FAQ path="/FAQ" />
        </Router>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
