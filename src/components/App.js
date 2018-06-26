import React, { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import data from '../testData';
//import PropTypes from 'prop-types';

class App extends Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };
  componentDidMount() {
    // timers, listeners
    this.setState({
      contests : data.contests
    });
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
