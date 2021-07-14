import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import TrackByLabelId from './domain/TrackByLabelId/TrackByLabelId';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <TrackByLabelId />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
