import HTTP from '../utils/HTTP'
import {moveidbBaseUrl, moveidbApiKey} from '../constants'

const getMovies = (movie_type) => {
	// Allowable Types: now_playing, upcoming, popular, top_rated
	const url = `movie/${movie_type}${moveidbApiKey}`
	return HTTP({url: url}).then(movies => movies)
}

const getPopularActors = () => {
	const url = `person/popular${moveidbApiKey}`
	return HTTP({url: url}).then(actors => actors)
}

const getMovie = (id) => {
	const url = `movie/${id}${moveidbApiKey}&append_to_response=credits`
	return HTTP({url: url}).then(movie => movie)
}

export default {
	getMovies: getMovies,
	getPopularActors: getPopularActors,
	getMovie: getMovie
}
