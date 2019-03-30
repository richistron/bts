import './../main.scss';
import Context from '../Context';
import UserListPage from './UserListPage';
import React, {useReducer} from 'react';
import reducers, {INITIAL_STATE} from '../reducers';
import {Route, HashRouter as Router} from 'react-router-dom';
import UserDetail from './UserDetail';

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
          <Route exact path='/' component={UserListPage} />
          <Route path='/users/:id/:action' component={UserDetail} />
        </Router>
      </div>
    </Context.Provider>
  );
};

export default Layout;