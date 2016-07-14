"use strict";

import http from 'axios';

const Store = () => {
  const _now_playing = 'http://api.themoviedb.org/3/movie/now_playing';
  const _actors = 'http://api.themoviedb.org/3/person/popular';
  const _api_key = 'acd114ebbf19bc5e7a316e1e530d7327';

  const getLatestMovies = () => {
    return http.get(_now_playing + '?api_key=' + _api_key);
  }

  const getPopularPeople = () => {
    return http.get(_actors + '?api_key=' + _api_key);
  }

  return {
    getLatestMovies: getLatestMovies,
    getPopularPeople: getPopularPeople
  }
}

export default Store;
