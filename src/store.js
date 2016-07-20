import {getMovieResourceFor, getPopularActors, getMovieFor} from './resources';

const Store = () => {

  const getMovies = (type) => {
    return fetch(getMovieResourceFor(type)).then( movies => movies.json() );
  };

  const getPopularPeople = () => {
    return fetch(getPopularActors()).then( actors => actors.json() );
  };

  const getMovie = () => {
    return fetch(getMovieFor(258489)).then( movie => movie.json() );
  };

  return {
    getMovies,
    getPopularPeople,
    getMovie
  };
};

export default Store;
