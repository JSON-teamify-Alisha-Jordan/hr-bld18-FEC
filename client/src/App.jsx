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
      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('app'),
);
