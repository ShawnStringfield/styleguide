import React from 'react';
import $ from 'jquery';
import Store from './store';
import Buttons from './components/buttons/buttons';
import Picklist from './components/lists/picklists/picklist';

const App = React.createClass ({

  getInitialState() {
    return {
      imgurl: 'http://image.tmdb.org/t/p/w75/',
			popularActors: [],
      movies: [],
      movie: {},
			toggleState: false
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

			$(document).on('click', function(event) {
				if (!$(event.target).closest('.picklist').length) {
					this.setState({toggleState: false});
				}
			}.bind(this))
  },

	handleClick(event) {
		this.state.toggleState = !this.state.toggleState
		this.setState({toggleState: this.state.toggleState});
	},

  render() {
    return (
      <div className="container">
    		<Buttons />

				<div className="doc-section">
					<h2>Dropdown</h2>
					<Picklist
						imgurl={this.state.imgurl}
						action={this.handleClick}
						actionIcon={this.state.toggleState === false ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
						selected="Selected"
						toggleState={this.state.toggleState === true ? 'on' : 'off'}
						popularActors={this.state.popularActors} />
    		</div>
      </div>
    );
  }
});

export default App;
