import React, { Component } from 'react'

class Counter extends Component {
  componentWillMount() {
    this.interval = setInterval(() => {
      this.props.startCounter()
    }, .1);
  }
  componentWillUnMount() {
    clearInterval(this.interval);
  }
  render() {
    return <span>{this.props.time}</span>;
  }
}

export default Counter
