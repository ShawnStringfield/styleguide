import React, {Component} from 'react'
import Movies from './resources/movies'

class App extends Component {

  state = {
    movies: [],
    actors: [],
    movie: {}
  }

  componentDidMount() {
    Movies.getMovies('now_playing').then(movies => {this.setState({movies: movies})})
    Movies.getPopularActors().then(actors => {this.setState({actors: actors})})
    Movies.getMovie(258489).then(movie => {this.setState({movie: movie})})
  }

  render() {
    return <h1>StyleGuide</h1>
  }
}

export default App
