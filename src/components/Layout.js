import './../main.scss';
import Context from '../Context';
import HomePage from './HomePage';
import Navigation from './Navigation';
import React, {useReducer} from 'react';
import reducers, {INITIAL_STATE} from '../reducers';
import {Route, BrowserRouter as Router} from 'react-router-dom';

const Layout = () => {
  const [state, dispatch] = useReducer(reducers, INITIAL_STATE);
  const context = {
    state,
    dispatch
  };

  return (
    <div className={'container'}>
      <Context.Provider value={context}>
        <Router>
          <Navigation />
          <Route exact path='' component={HomePage} />
        </Router>
      </Context.Provider>
    </div>
  );
};

export default Layout;