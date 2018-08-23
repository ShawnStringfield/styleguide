import React from 'react';
import {getPopularActors} from './resources/movies';
import http from 'axios';

function movies() {
  http.get(getPopularActors()).then(function(movies) {
    console.log(movies.data.results);
  })
}

const App = () => (
  movies(),
  <h1>Hello</h1>
)

export default App;
