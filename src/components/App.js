import React, { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';
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
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
}

// App.propTypes = {
//   contests: PropTypes.array.isRequired  // only accepts a string and is mandatory
// };

export default App;
