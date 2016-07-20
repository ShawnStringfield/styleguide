import React from 'react';
import Store from './store';

import Buttons from './components/buttons/buttons';

import Picklist from './components/lists/picklists/picklist';

const App = React.createClass ({

  getInitialState() {
    return {
      imgurl: 'http://image.tmdb.org/t/p/w75/',
			popularActors: [],
      movies: [],
      movie: {}
    };
  },

  componentWillMount() {
		Store()
			.getMovie()
			.then( (movie) => this.setState({movie: movie}) );

    Store()
			.getMovies('now_playing')
			.then( (movies) => this.setState({movies: movies.results}) );

    Store()
			.getPopularPeople()
			.then( (actors) => this.setState({popularActors: actors.results}) );
  },

  render() {
    return (
      <div className="container">
				<Buttons />
				
        <h2>Dropdown</h2>
        <Picklist
          imgurl={this.state.imgurl}
          popularActors={this.state.popularActors} />
      </div>
    );
  }
});

export default App;
