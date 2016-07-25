import React from 'react';
import Store from './store';
import Buttons from './components/buttons/buttons';
import Picklist from './components/lists/picklists/picklist';
import {movieimageurl} from './resources';

const App = React.createClass ({

  getInitialState() {
    return {
			popularActors: [],
      movies: [],
      movie: {}
    };
  },

  componentWillMount() {
		Store().getMovie().then( (movie) => this.setState({movie: movie}) );
    Store().getMovies('now_playing').then( (movies) => this.setState({movies: movies}) );
    Store().getPopularPeople().then( (actors) => this.setState({popularActors: actors}) );

  },

	getListItem(item) {
		console.log( item );
	},

	getActors() {
		return this.state.popularActors.map(
			actor => ({
				id: actor.id,
				label: actor.name,
				pic: actor.profile_path
			})
		);
	},

  render() {
		console.log( this.state );
    return (
      <div className="container">
				<Buttons />

				<div className="doc-section">
					<h2>Lists</h2>
					<ul>
						<li>Put Some List Items Here</li>
						<li>Put Some List Items Here</li>
					</ul>
				</div>

				<div className="doc-section">
					<h2>Dropdown</h2>
					<Picklist
						listType="profile"
						baseUrlPathForAvatar={movieimageurl}
						action={this.getListItem}
						listData={this.getActors()} />
				</div>
      </div>
    );
  }
});

export default App;
