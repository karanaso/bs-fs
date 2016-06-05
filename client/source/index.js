import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import HelloWorldComponent from './Bundles/HelloWorld/Components/HelloWorldComponent';




export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>NavBar</div>
        <div className="Container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default class App extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <Route path="/helloworld" component={HelloWorldComponent} />
        </Route>
      </Router>
    )
  }
}

ReactDom.render( <App />, document.getElementById('app') );

if (module.hot) {
  module.hot.accept();
}
