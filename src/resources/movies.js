import {moveidbBaseUrl, moveidbApiKey} from '../constants'

export const getMovieResourceFor = (movie_type) => {
	// Allowable Types: now_playing, upcoming, popular, top_rated
	return `${moveidbBaseUrl}movie/${movie_type}${moveidbApiKey}`
}

export const getPopularActors = () => {
	return `${moveidbBaseUrl}person/popular${moveidbApiKey}`
}

export const getMovieFor = (id) => {
	return `${moveidbBaseUrl}movie/${id}${moveidbApiKey}&append_to_response=credits`
}

// const getMovies = (type) => {
// 	return http.get(getMovieResourceFor(type)).then( movies => movies.data.results )
// }
//
// const getPopularPeople = () => {
// 	return http.get(getPopularActors()).then( actors => actors.data.results )
// }
//
// const getMovie = () => {
// 	return http.get(getMovieFor(258489)).then( movie => movie.data )
// }
