import './../main.scss';
import Context from '../Context';
import HomePage from './HomePage';
import React, {useReducer} from 'react';
import reducers, {INITIAL_STATE} from '../reducers';
import {Route, HashRouter as Router} from 'react-router-dom';
import UserDetailPage from './UserDetailPage';

const Layout = () => {
  const [state, dispatch] = useReducer(reducers, INITIAL_STATE);
  const context = {
    state,
    dispatch
  };

  return (
    <Context.Provider value={context}>
      <div className={'container'} style={{paddingTop: '25px'}}>
        <Router basename={'/'}>
          {/*<Navigation />*/}
          <Route exact path='/' component={HomePage} />
          <Route path='/users/:id/:action' component={UserDetailPage} />
        </Router>
      </div>
    </Context.Provider>
  );
};

export default Layout;