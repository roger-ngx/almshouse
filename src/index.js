import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import * as serviceWorker from './serviceWorker';
import HomeStore from './stores/HomeStore';
import HouseDetail from './pages/HouseDetail';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";

ReactDOM.render(
    <Provider HomeStore={HomeStore}>
        <Router>
            <Route exact path='/' component={Home} />
            <Route path='/houses' component={HouseDetail} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
