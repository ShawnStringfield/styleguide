import http from 'axios';
import {getMovieResourceFor, getPopularActors, getMovieFor} from './resources';

const Store = () => {

  const getMovies = (type) => {
    return http.get(getMovieResourceFor(type)).then( movies => movies.data.results );
  };

  const getPopularPeople = () => {
    return http.get(getPopularActors()).then( actors => actors.data.results );
  };

  const getMovie = () => {
    return http.get(getMovieFor(258489)).then( movie => movie.data );
  };

  return {
    getMovies,
    getPopularPeople,
    getMovie
  };
};

export default Store;
