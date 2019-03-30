import './../main.scss';
import Context from '../Context';
import UserListPage from './UserListPage';
// import Navigation from './Navigation';
import React, {useReducer} from 'react';
import reducers, {INITIAL_STATE} from '../reducers';
import {Route, HashRouter as Router} from 'react-router-dom';
import UserDetail from './UserDetail';
import Services from '../lib/Services';

const Layout = () => {
  const [state, dispatch] = useReducer(reducers, INITIAL_STATE);
  const context = {
    state,
    dispatch
  };

  React.useEffect(() => {
    const options = {method: 'get', resource: 'users'};
    const cb = users => dispatch({type: 'ADD_USERS', users});
    Services(options).then(cb);
  }, []);

  return (
    <div className={'container'} style={{paddingTop: '25px'}}>
      <Context.Provider value={context}>
        <Router>
          {/*<Navigation />*/}
          <Route exact path='/' component={UserListPage} />
          <Route path='/users/:id' component={UserDetail} />
        </Router>
      </Context.Provider>
    </div>
  );
};

export default Layout;