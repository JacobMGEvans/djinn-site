import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home';
import Header from './components/sidebar';

export default class App extends Component {
  render() {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh'
        }}>
        {(document.body.style = 'background: #494949;')}
        <Header />
        <Home />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
