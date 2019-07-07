import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import House from './pages/House/House';
import HouseMobile from './pages/House/mobile/HouseMobile';
import * as serviceWorker from './serviceWorker';
import HomeStore from './stores/HomeStore';
import HouseDetail from './pages/HouseDetail';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import NavigationBar from './components/NavigationBar/NavigationBar';
import MapStore from './stores/MapStore';
import Admin from './pages/Admin/Admin';
import AdminStore from './stores/AdminStore';
import LoginStore from './stores/LoginStore';
import './index.scss';

ReactDOM.render(
    <Provider 
        HomeStore={HomeStore}
        MapStore={MapStore}
        AdminStore={AdminStore}
        LoginStore={LoginStore}
    >
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <div style={{width: '100%'}}>
                <NavigationBar />
            </div>
            <div style={{flex: 1, overflow: 'scroll'}}>
                <Router>
                    <Route exact path='/' component={House} />
                    <Route path='/houses/:id' component={HouseDetail} />
                    <Route path='/admin' component={Admin} />
                </Router>
            </div>
        </div>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
