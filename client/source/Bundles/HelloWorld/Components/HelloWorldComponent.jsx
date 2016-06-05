import React from 'react';

export default class HelloWorldComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  doSomething = () => {
    alert('You clicked me');
  }

  render() {
    return (
      <div>
        <h1>Hello world !!!</h1>
        <a onClick={this.doSomething.bind(this)}>Click me</a>
      </div>
    )
  }
}
