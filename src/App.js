import React, { Component } from 'react';
import Header from './components/Header';
import SidebarMenu from './components/SidebarMenu';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SidebarMenu />
      </div>
    );
  }
}

export default App;
