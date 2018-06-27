import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import ContestList from './ContestList';
//import PropTypes from 'prop-types';

class App extends Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };
  componentDidMount() {
    // timers, listeners
    axios.get('/api/contests')
      .then(resp => {
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(console.error);
  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList contests={this.state.contests} />
      </div>
    );
  }
}

// App.propTypes = {
//   contests: PropTypes.array.isRequired  // only accepts a string and is mandatory
// };

export default App;
