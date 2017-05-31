import React, { Component } from 'react';
import Header from './components/Header';
import SidebarMenu from './components/SidebarMenu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      height: 0,
    }
  }

  componentDidMount() {
    this.setState({height: window.innerHeight - 50 + 'px'});
  }

  render() {
    const { height  } = this.state;
    return (
      <div>
        <Header />
        <SidebarMenu height={height}/>
      </div>
    );
  }
}

export default App;
