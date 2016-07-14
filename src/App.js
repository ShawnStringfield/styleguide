"use strict";

import React from 'react';
import Store from './store';
import Picklist from './components/lists/picklists/picklist';

const App = React.createClass ({

  getInitialState() {
    return {
      imgurl: 'http://image.tmdb.org/t/p/w75/',
      movies: [],
      actors: []
    };
  },

  componentWillMount() {
    const movies = Store().getLatestMovies();
    const actors = Store().getPopularPeople();

    movies.then( (response) => this.setState({movies: response.data.results}) );
    actors.then( (response) => this.setState({actors: response.data.results}) );
  },

  render() {
    return (
      <div className="container">
        <Picklist
          imgurl={this.state.imgurl}
          actors={this.state.actors} />
      </div>
    );
  }
});

export default App;
