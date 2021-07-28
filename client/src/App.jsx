import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stuff: [],
    };
  }

  render() {
    return (
      <div>
        <div>Hello World</div>
        <h3>Nice to see you.</h3>
        <h2>Did it work?</h2>

      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('app'),
);
