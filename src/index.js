import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { WelcomeComponent,EndScreenComponent,QuizComponent } from './components/IndexComponent';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, 
                applyMiddleware(thunk, logger)
     ) ;

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={WelcomeComponent} />
                <Route exact path="/quiz" component={QuizComponent} />
                <Route exact path="/end" component={EndScreenComponent} />
            </Switch>
        </Router>
    </Provider>
,
document.getElementById('root'));

