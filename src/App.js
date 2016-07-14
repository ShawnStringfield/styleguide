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
        <h2>Buttons</h2>
        <p>
          <button className="btn">Default Button</button>
          <button className="btn btn-primary">Primary Button</button>
        </p>

        <h2>Dropdown</h2>
        <Picklist
          imgurl={this.state.imgurl}
          actors={this.state.actors} />

          <div className="container">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
      </div>
    );
  }
});

export default App;
