import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from '../../pages/';
import Places from '../../pages/places';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Menu} />
            <Route path="/places/:lat/:lng" component={Places} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;