import React from 'react';
import moment from 'moment';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time : ''
    }
  }

  componentDidMount() {
    this.timer = setInterval( () => this.setState({ time : new Date().toLocaleTimeString() })
    ,1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const date = moment().format("MMM Do YYYY");
    return (
      <div className="header">
        <h3>Welcome to My Website. Today is {date}, {this.state.time} </h3>
      </div>
    );
  }
}
