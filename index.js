import React, { Component } from 'react';

import SideBar from './components/sidebar';

export default class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
