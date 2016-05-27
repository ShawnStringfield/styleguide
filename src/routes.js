import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import Home from './components/pages/home';
import Note from './components/lists/note';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="notes" component={Note} />
    </Route>
)
