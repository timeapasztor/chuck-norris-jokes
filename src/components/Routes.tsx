import { Redirect, Route, Switch } from 'react-router';
import RandomJoke from './RandomJoke/RandomJoke';
import Categories from './Categories/Categories';
import Search from './Search/Search';
import NotFound from './NotFound';
import React from 'react';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/random-joke" />
            </Route>
            <Route exact path="/random-joke" component={RandomJoke} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/search" component={Search} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;
