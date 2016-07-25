const themovedbBaseUrl = 'http://api.themoviedb.org/3/'
const themovedbApiKey = '?api_key=acd114ebbf19bc5e7a316e1e530d7327';
const baseImageUrl = 'http://image.tmdb.org/t/p/w300/';

export const movieimageurl = baseImageUrl;

export const getMovieResourceFor = (movie_type) => {
	// Allowable Types: now_playing, upcoming, popular, top_rated
	return `${themovedbBaseUrl}movie/${movie_type}${themovedbApiKey}`;
}

export const getPopularActors = () => {
	return `${themovedbBaseUrl}person/popular${themovedbApiKey}`;
}

export const getMovieFor = (id) => {
	return `${themovedbBaseUrl}movie/${id}${themovedbApiKey}&append_to_response=credits`;
}
